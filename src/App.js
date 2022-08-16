import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import bookmetadata from "./bookmetadata.json";
import Search from './components/Search';
import { Button } from './components/Button';


function App() {
  const [data, setData] = useState(bookmetadata);
  const [filtereddata, setFiltereddata] = useState();
  const [searchstring, setSearchstring] = useState("");
  const [pagenumber, setPagenumber] = useState(0);

  useEffect(() => {
    let c = 0;
    data.map(r => {
      if (JSON.stringify(r).includes(searchstring)) c++;
    })
    console.log(c);
    setFiltereddata(c);
    return () => {
    }
  }, [searchstring])

  const searchcallback = (input) => {
    setSearchstring(input);
  }
  const pagenumbercallback = (input) => {
    if (!filtereddata) setFiltereddata(data.length);
    if (!input && pagenumber >= 1) setPagenumber(pagenumber - 1);
    if (input && pagenumber < (filtereddata / 10) - 1) setPagenumber(pagenumber + 1);
  }
  return (
    <div class="container mt-4">
      <h2>Library Management System</h2>
      <hr />
      <Search callback={searchcallback} />
      <Table data={data} searchstring={searchstring} pagenumber={pagenumber} />
      <Button pagenumbercallback={pagenumbercallback} totalpage={data.length} pagenumber={pagenumber} filtereddata={filtereddata}/>
    </div>
  );
}

export default App;

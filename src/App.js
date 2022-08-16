import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import bookmetadata from "./bookmetadata.json";
import Search from './components/Search';

function App() {
  const [data, setData] = useState(bookmetadata);
  const [searchstring, setSearchstring] = useState("");

  const searchcallback = (input) => {
    setSearchstring(input);
    console.log(input);
  }
  return (
    <div class="container mt-4">
      <Search callback={searchcallback}/>
      <Table data={data} searchstring={searchstring}/>
    </div>
  );
}

export default App;

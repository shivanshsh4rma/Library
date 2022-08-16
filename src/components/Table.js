import { useEffect, useState } from "react";

function Table({ data, searchstring, pagenumber}) {
    const [column, setColumn] = useState("title");
    const columnfilter = () => {
        data.sort((a, b) => {
            console.log(a[column]);
            if(a[column]-b[column]>0)return 1;
            if(a[column]-b[column]<0)return -1;
            return 0;
          })
         setTemp(data)
      }
    const [temp, setTemp] = useState(data);
    return (
        <div class="table">
            <table id="dtHorizontalExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <tr style={{cursor:"pointer"}}>
                        <th scope="col" onClick={() => {setColumn("title"); columnfilter()}}>Title</th>
                        <th scope="col" onClick={() => {setColumn("author"); columnfilter()}}>Author</th>
                        <th scope="col" onClick={() => {setColumn("language"); columnfilter()}}>Language</th>
                        <th scope="col" onClick={() => {setColumn("year"); columnfilter()}}>Publish Year</th>
                    </tr>
                </thead>

                <tbody id="tableBody">
                    {temp.filter((r, i) => {
                        if(JSON.stringify(r["title"]+r["language"]+r["year"]+r["author"]).includes(searchstring)) return r; 
                    }).filter((r, i) => {
                        if(i>=pagenumber*10 && i<10*(pagenumber+1)) return r; 
                    }).map((res, i) => {
                        return (<tr>
                            <th scope="col">{res.title}</th>
                            <th scope="col">{res.author}</th>
                            <th scope="col">{res.language}</th>
                            <th scope="col">{res.year}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

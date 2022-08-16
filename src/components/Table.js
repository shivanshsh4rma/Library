function Table({ data, searchstring }) {
    return (
        <div class="table">
            <table id="dtHorizontalExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Publish Date</th>
                    </tr>

                </thead>

                <tbody id="tableBody">
                    {data.filter((r) => {
                        if(JSON.stringify(r).includes(searchstring)) return r; 
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

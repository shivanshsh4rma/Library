
function Search({ callback }) {
  return (
    <>
     <h2>Search Your Books here</h2>
        <hr />
        <form id="libraryForm">
            <div class="form-group row">
                <label for="bookName" class="col-sm-2 col-form-label">Search</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="bookName" onChange={(e) => callback(e.target.value)}/>
                </div>
            </div>
        </form>
        <h2 class="mb-2  mt-2">Books</h2>
        <hr />

    </>
  );
}

export default Search;

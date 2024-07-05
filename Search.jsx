function Search(props) {
    return (
      <div className="search">
        <center>
          <h1 style={{ color: "black" }}>Team 1's Shopping App</h1>
          <input 
            className="sea" 
            type="text" 
            placeholder="Search your Products" 
            onChange={props.searchdress} 
          />
        </center>
      </div>
    );
  }
  
  export default Search;
  
import React, { Component } from "react";

class Search extends Component {
    

    render() {

        return (
            <div className="input-group m-2">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                </span>
            </div>
      );
    }
  }
  
  export default Search;



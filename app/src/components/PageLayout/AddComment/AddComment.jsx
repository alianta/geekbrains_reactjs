import React, {Component} from "react";

class AddComment extends Component{
 render(){
     return(
        <div className="card m-2">
            <div className="card-header">
                 Leave a comment
            </div>
            <div className="card-body">
                 <form>
                     <div className="form-group">
                         <label for="exampleFormControlTextarea1">Example textarea</label>
                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
            </div>
        </div>
     );
 }
}

export default AddComment;
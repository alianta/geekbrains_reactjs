import React, { Component } from "react";
import AddComment from "../AddComment/AddComment.jsx"

class Card extends Component {
    render() {
        //const { postTitle, postPromoText } = this.props; 
        const postTitle = this.props.title ;
        const postPromoText = this.props.children;
        return (
            <div className="card m-2">
                <div className="card-body">
                    <h5 className="card-title">{postTitle}</h5>
                    <p className="card-text">{postPromoText}</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                    <AddComment/>
                </div>
            </div>
      );
    }
  }
  
  export default Card;
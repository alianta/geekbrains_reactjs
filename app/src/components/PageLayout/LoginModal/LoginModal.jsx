import React, { Component } from "react";


class LoginModal extends Component {
  render() {
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="loginModalLabel">Login form</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div>
                                <label for="loginEmail">Login</label>
                                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter login"/>
                            </div>
                            <div className="form-group">
                                <label for="loginPassword">Password</label>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Enter password"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default LoginModal;

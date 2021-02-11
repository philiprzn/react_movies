import React, {Component} from 'react';
import './notFound.css'
import { Link } from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            /*<div>
                <h1>404 - Not Found!</h1>
                <Link to="/">Go Home</Link>
            </div>*/

            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1 style={{
                            backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                        }}>404</h1>
                    </div>
                    <h2>Oops! This Page Could Not Be Found</h2>
                    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is
                        temporarily unavailable</p>
                    <Link to="/">Go To Homepage</Link>
                </div>
            </div>
        )
    }
}

export default NotFound;
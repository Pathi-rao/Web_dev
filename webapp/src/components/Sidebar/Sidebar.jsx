import React from "react"
import './Sidebar.css'
import {Link} from "react-router-dom"

class Sidebar extends React.Component{
    render(){
        return (
            <div className="sidebar">
                <div>
                <Link to={"/"}>
                    Home
                </Link>
                </div>
                <div>
                    <Link to={"/about"}>
                    About
                    </Link>
                </div>
                <div>
                    Address
                </div>
                <div>
                    Orders
                </div>
                <div>
                    Wishlist
                </div>
                <div>
                    Profile
                </div>
            </div>
        )
    }
}

export default Sidebar
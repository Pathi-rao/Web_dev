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
                    Input1
                </div>

                <div>
                    Input2
                </div>

                <div>
                    Input3
                </div>

                <div>
                    Input4
                </div>

            </div>
        )
    }
}

export default Sidebar
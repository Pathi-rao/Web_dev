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
                    Video player
                    </Link>
                </div>

                <div>
                    Masking
                </div>

                <div>
                    Execution
                </div>

                <div>
                    Result
                </div>

            </div>
        )
    }
}

export default Sidebar
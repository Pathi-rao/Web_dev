import React from "react"
import './Sidebar.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome ,faVideo,faFile,faCodeBranch,faImages } from '@fortawesome/fontawesome-free-solid'



class Sidebar extends React.Component{
    render(){
        return (
            <div className="sidebar">

                <div className="sidebar_items">
                    <FontAwesomeIcon icon={faHome} />
                    <Link to={"/"}>
                        Home
                    </Link>
                </div>

                <div className="sidebar_items">
                <FontAwesomeIcon icon={faVideo} />
                    <Link to={"/about"}>
                    Video player
                    </Link>
                </div>

                <div className="sidebar_items">
                <FontAwesomeIcon icon={faImages} />
                   <a href=""> Masking</a> 
                </div>

                <div className="sidebar_items">
                <FontAwesomeIcon icon={faCodeBranch} />
                   <a href=""> Execution</a> 
                </div>

                <div className="sidebar_items">
                <FontAwesomeIcon icon={faFile} />
                  <a href=""> Result</a>  
                </div>

            </div>
        )
    }
}

export default Sidebar
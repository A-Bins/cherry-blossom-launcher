
import React, {ChangeEvent} from 'react'
import { Link } from 'react-router-dom';
import "./client.css"



class Client extends React.Component<{}>{


    render(){
        return(
            <div className="Client">
                <div className="Title">
                    <span className="profile"></span>
                    <span className="underTitle"></span>
                    <input className="start" value="시작" type="button"></input>
                    <Link className="link_develpment" to="/">우회</Link>
                </div>
            </div>
        )
    }

}


export default Client;
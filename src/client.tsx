
import React  from 'react'
import { Link } from 'react-router-dom';
import "./client.css"
import Info from "./user/info"



class Client extends React.Component<{}>{


    render(){
        
        const hoverRef: (HTMLDivElement | null)[] = []
        function hover() {
            console.log("시작")
            hoverRef[0]!.style.display = "inline"
        }
        function hoverDone() {
            hoverRef[0]!.style.display = "none"
        }
        const name: string = Info.userData.name === "" ? "A_basdasdasdins" : Info.userData.name;
        const id: string = Info.userData.uuid === "" ? "cbe06212-6680-4775-ad3b-7395b18777f0" : Info.userData.uuid
        return(
            <div className="Client">
                <div className="Title">
                    <div className="profile">                    
                        <img alt="profileImg" src={`https://crafatar.com/avatars/${Info.userData.uuid === '' ? "cbe06212-6680-4775-ad3b-7395b18777f0" : Info.userData.uuid}?size=50`} className="profileImg"></img>
                        <div className="name" onMouseLeave={ (e) => hoverDone()} onMouseEnter={ (e) => hover()}>{name}</div>
                        <div className="id" ref={(e) => hoverRef[0] = e}>{id}</div>
                        <div className="option"></div>
                    </div>
                    <span className="underTitle"></span>
                    <input className="start" value="시작" type="button"></input>
                    <Link className="link_develpment" to="/">우회</Link>
                </div>
            </div>
        )
    }

}


export default Client;

import React  from 'react'
import { Link } from 'react-router-dom';
import "./client.css"
import Info from "./user/info"



class Client extends React.Component<{}>{


    render(){
        const name: string = Info.userData.name === '' ? "A_bins" : Info.userData.name;
        const title_list = [`안녕하세요 ${name}님!`, `${name}님 안녕하세요!`]
        const title = title_list[Math.floor(Math.random() * title_list.length)];
        return(
            <div className="Client">
                <div className="Title">
                    <img alt="profileImg" src={`https://crafatar.com/avatars/${Info.userData.uuid === '' ? "cbe0621266804775ad3b7395b18777f0" : Info.userData.uuid}?size=50`} className="profileImg"></img>
                    <span className="profileName">{title}</span>
                    <span className="profileUuid">{Info.userData.uuid === '' ? "cbe0621266804775ad3b7395b18777f0" : Info.userData.uuid}</span>
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
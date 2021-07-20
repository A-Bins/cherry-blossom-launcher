
import React  from 'react'
import { Link } from 'react-router-dom';
import "./client.css"
import Info from "./user/info"

interface states{
    optionValue: string
}
class Client extends React.Component<any, states>{
    constructor(props: any) {
        super(props)
        this.state = {
            optionValue: "∧"
        }
    }
    
    optionRef: (HTMLDivElement | null)[] = []
    optionSpread() {
        this.optionRef[0]!.style.display = "flex"
        this.optionRef[0]!.style.animation = "down 0.5s forwards"

        this.setState({
            optionValue: "∨"
        })
    }
    optionFolding() {
        this.optionRef[0]!.style.animation = "up 0.5s forwards"
        this.setState({
            optionValue: "∧"
        })
    }
    render(){
        
        const hoverRef: (HTMLDivElement | null)[] = []
        function hover() {
            hoverRef[0]!.style.display = "inline"
        }
        function hoverDone() {
            hoverRef[0]!.style.display = "none"
        }
        const name: string = Info.userData.name === "" ? "A_bins" : Info.userData.name;
        const id: string = Info.userData.uuid === "" ? "cbe06212-6680-4775-ad3b-7395b18777f0" : Info.userData.uuid
        return(
            <div className="Client">
                <div className="Title">
                    <div className="profile">                    
                        <img alt="profileImg" src={`https://crafatar.com/avatars/${Info.userData.uuid === '' ? "cbe06212-6680-4775-ad3b-7395b18777f0" : Info.userData.uuid}?size=50`} className="profileImg"></img>
                        <div className="namebar">
                            <div className="name" onMouseLeave={ (e) => hoverDone()} onMouseEnter={ (e) => hover()}>{name}</div>
                        </div>
                        <div className="id" ref={(e) => hoverRef[0] = e}>{id}</div>
                        <div className="option" onClick={() => this.state.optionValue === "∨" ? this.optionFolding() : this.optionSpread()}>{this.state.optionValue}</div>
                        <div className="options" ref={(e) => this.optionRef[0] = e}>
                            <div className="JVM">
                                대충 JVM 설정하는거임 호호호호호호호호호호호
                            </div>
                        </div>
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
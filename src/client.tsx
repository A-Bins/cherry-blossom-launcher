    import React  from 'react'
import { Link } from 'react-router-dom';
import "./client.css"
import Info from "./user/info"
import Music from "./user/music"

interface states{
    optionValue: string
}
class Client extends React.Component<any, states>{
    constructor(props: any) {
        super(props)
        this.thema()
        console.log("init")
        this.state = {
            optionValue: "∧"
        }
    }
    hoverRef: (HTMLDivElement | null)[] = []
    optionRef: (HTMLDivElement | null)[] = []
    volumeRef: (HTMLInputElement | null)[] = []

    async thema() {
        if(!Music.music.paused)
            Music.music.pause()
        await new Promise(function() {
            setTimeout(() => {
                Music.music.currentTime = 0
                Music.music.volume = localStorage.getItem("volume") == null ? 0.5 : (+localStorage.getItem("volume")!)
                Music.music.loop = true
                Music.music.play()
            }, 10);
        })
        
    }

    optionSpread() {
        this.volumeRef[0]!.style.background = 
        "linear-gradient(to right, #767676 0%, #767676 "
        +this.volumeRef[0]!.valueAsNumber*10+
        "%, #454545 "
        +this.volumeRef[0]!.valueAsNumber*10+
        "%, #454545 100%)"
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
    hover() {
        this.hoverRef[0]!.style.display = "inline"
    }
    hoverDone() {
        this.hoverRef[0]!.style.display = "none"
    }
    render(){


        const name = Info.userData.name === "" ? "A_bins" : Info.userData.name;
        const id = Info.userData.uuid === "" ? "cbe06212-6680-4775-ad3b-7395b18777f0" : Info.userData.uuid
        return(
            <div className="Client">
                <div className="Title">
                    <div className="profile">                    
                        <img alt="profileImg" src={`https://crafatar.com/avatars/${Info.userData.uuid === '' ? "cbe06212-6680-4775-ad3b-7395b18777f0" : Info.userData.uuid}?size=50`} className="profileImg"></img>
                        <div className="namebar">
                            <div className="name" onMouseLeave={ (e) => this.hoverDone()} onMouseEnter={ (e) => this.hover()}>{name}</div>
                        </div>
                        <div className="id" ref={(e) => this.hoverRef[0] = e}>{id}</div>
                        <div className="option" onClick={() => this.state.optionValue === "∨" ? this.optionFolding() : this.optionSpread()}>{this.state.optionValue}</div>
                        <div className="options" ref={(e) => this.optionRef[0] = e}>
                            <div className="volumeTEXT">음량</div>
                            <input onChange={e => { 
                                    e.target.style.background = 
                                    "linear-gradient(to right, #767676 0%, #767676 "
                                    +e.currentTarget.valueAsNumber*10+
                                    "%, #454545 "
                                    +e.currentTarget.valueAsNumber*10+
                                    "%, #454545 100%)"
                                    Music.music.volume = (e.currentTarget.valueAsNumber)/100
                                    localStorage.setItem("volume", Music.music.volume.toString())
                                }
                            } type="range" ref={e => this.volumeRef[0] = e} defaultValue={
                                
                                localStorage.getItem("volume") == null ? 5 : (+localStorage.getItem("volume")!*100)
                            } step="any" min="0" max="10" className="volume"/>
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
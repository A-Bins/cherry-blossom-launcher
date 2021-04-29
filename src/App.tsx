import React, {ChangeEvent} from 'react'
import './App.css'
import Minecraft_logo from "./icons/minecraft_logo.png"

interface State {
  email: string,
  password: string
}
class App extends React.Component<{}, State> {
  loginButtonRef: any
  constructor (props: any){
    super(props)
    this.state = {
      email: "",
      password: "",
    }
    this.loginButtonRef = []
  }
  emailChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value,
      password: this.state.password
    })
  }
  passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: this.state.email,
      password: e.target.value
    })
  }

  render(){
    const login = (enter: Boolean) =>{
      if(enter){
        this.loginButtonRef[0].className = "loginActive"
        setTimeout(() =>{
          this.loginButtonRef[0].className = "login"
        }, 50)
      }
      const login_titles: string[] = ["모장한테 물어볼게욘!", "기다리세욘! 금방 다녀와욘", "요청중이에욘!", "옆집 아저씨께 물어볼께욘!"]
      const login_title = login_titles[Math.floor(Math.random() * login_titles.length)];
      this.loginButtonRef[0].value = login_title
    }
    window.onkeydown = function(e: KeyboardEvent){
      if(!e){
        return
      }
      if(e.key === 'Enter'){
        login(true)
      }
    }
    return (
      <div className="Cherry">
        
        <header className="Blossom">
          <img alt="minecraft_logo" src={Minecraft_logo} className="Minecraft_logo"></img>
          {/* <p className="info">Minecraft</p> */}
          <p className="email_info">이메일</p>
          <p className="password_info">비밀번호</p>
          <span className="Frame"></span>
          <input 
          className="login" 
          type="button" 
          value="로그인" 
          ref={a => this.loginButtonRef[0] = a}
          onClick={(e) => login(false)}
          ></input >
          <input 
          className="email" 
          name="email" 
          type="text" 
          value={this.state.email} 
          onChange={this.emailChange}></input>
          <input 
          className="password" 
          name="password" 
          type="password" 
          value={this.state.password} 
          onChange={this.passwordChange}></input>
          <a className="link_forget" href="https://www.minecraft.net/ko-kr/password/forgot" target="_blank" rel="noopener noreferrer"> 비밀번호를 잊으셨나요?</a>
          <a className="link_none" href="https://signup.live.com/signup?ru=https%3a%2f%2flogin.live.com%2foauth20_authorize.srf%3flc%3d2066%26redirect_uri%3dhttps%3a%252f%252fsisu.xboxlive.com%252fconnect%252foauth%252fXboxLive%26response_type%3dcode%26state%3dLAAAAAEB1ufJ-SJRurM1pEgCt7g4ZoV_faB9gfe4CDuRFQgW2higKAGC4-SWMWUzZWQ4Y2I1YWE0NDViMDk5MWI2MDBlMDJkZDg3MjEx%26client_id%3d000000004420578E%26scope%3dXboxLive.Signin%26lw%3d1%26fl%3ddob%2ceasi2%26xsup%3d1%26cobrandid%3d8058f65d-ce06-4c30-9559-473c9275a65d%26mkt%3dKO-KR%26uaid%3d917ed2f1993144599f260777fbcda0a9&mkt=KO-KR&uiflavor=web&lw=1&fl=dob%2ceasi2&cobrandid=8058f65d-ce06-4c30-9559-473c9275a65d&client_id=000000004420578E&uaid=917ed2f1993144599f260777fbcda0a9&suc=000000004420578E&lic=1" target="_blank" rel="noopener noreferrer"> 계정이 없으신가요?</a>
        </header>
      </div>
    )
  }
}

export default App


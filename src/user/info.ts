import axios from "axios"

interface UserInfo{
    uuid: string
    name: string
}
class info {
  static userData: UserInfo = {
    uuid: "",
    name: "",
  }
  static async authPost(email: string, password: string): Promise<boolean>{
    try {
      const result = await axios.post('https://authserver.mojang.com/authenticate',
          {
              agent: {
                  name: "Minecraft",
                  version: 1
              },
              username: email,
              password: password,
              requestUser: true
          }
      )
      
      this.userData.name = result.data.selectedProfile.name
      this.userData.uuid = result.data.selectedProfile.id
      return true
    }  catch(i) {
        return false
    }
  }
}
export default info
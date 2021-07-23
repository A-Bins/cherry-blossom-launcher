// 배포 환경에서 빌드된 HTML 파일을 가져오기 위해 아래 두 모듈을 사용합니다.
import * as path from "path";
import * as url from "url";

import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";

// config 파일로 따로 선언하여도 좋습니다.
const baseUrl: string = "http://localhost:3000";

function createMainWindow(): void {
  let mainWindow: BrowserWindow = new BrowserWindow({
    width: 1080,
    height: 700,
    autoHideMenuBar: true,
    frame: false,
    show: false,
    resizable: false,
    center: true,
    icon: path.join(__dirname,'../src/icons/icon.png'),
    titleBarStyle: "hidden", // add this line
    backgroundColor: "#D3CCE3",
    title: "Cherry Blossom Launcher",
    // 위 path, url 모듈을 사용하기 위해서 Node 환경을 Electron에 합치는 것을 뜻합니다.
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      nodeIntegrationInSubFrames:true,
      nodeIntegrationInWorker:true,
      enableRemoteModule: true,
      contextIsolation:false
    }});

    mainWindow.on('closed', () => {
      mainWindow = null 
    })

    mainWindow.once('ready-to-show', () => {
      mainWindow.show()
    })
  
  // 2021.03.28 수정
  // 실제로 배포된 어플리케이션에서는 빌드된 index.html 파일을 서빙합니다.  
  // url.pathToFileURL()로 나온 객체는 string type으로 변환이 필요합니다.
  const mainWindowUrl: string = url.pathToFileURL(path.join(__dirname, '../build/index.html')).toString();

  // 개발 환경 여부 확인 후 맞는 url/file로 서빙합니다.
  mainWindow.loadURL(isDev ? baseUrl : mainWindowUrl);

  // 개발 환경의 경우 Chrome의 개발자 도구를 열어 사용합니다.
  // if (isDev) {
    // mainWindow.webContents.openDevTools();
  // }
}

// 어플리케이션이 준비가 되었다면 데스크탑 어플리케이션으로 실행합니다.
app.on("ready", createMainWindow);

// 모든 윈도우가 닫혔다면 어플리케이션을 종료합니다.
app.on("window-all-closed", app.quit);
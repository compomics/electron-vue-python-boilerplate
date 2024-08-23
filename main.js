const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const fastapiAppUrl = 'http://127.0.0.1:5500'
const treeKill = require('tree-kill');


let fastApiProcess = null

function startFastAPI() {
    console.log('startFastAPI')
    fastApiProcess = require('child_process').spawn(
        path.join(__dirname, '/build/backend/main'), { windowsHide: false })
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    if(process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:5173');
    } else {
        console.log(__dirname)
        win.loadFile(path.join(__dirname, '/build/frontend/index.html'))
        startFastAPI()
    }
}

const stopFastAPI = () => {
    if (fastApiProcess !== null) {
        treeKill(fastApiProcess.pid)
        fastApiProcess = null
    }
}

app.on('before-quit', stopFastAPI)

app.whenReady().then(() => {
    createWindow()
     app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    
})

app.on('window-all-closed', () => {
    console.log(process.platform)
    // for not macOS
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
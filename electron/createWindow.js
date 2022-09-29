const { BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 180, height: 150, frame: false, resizable: false, fullscreenable: false, show: false,
        // webPreferences: {
        //     nodeIntegration: true
        // }
    })

    win.loadFile('index.html')
    // win.loadURL('https://google.com')


    //blur da janela
    return win
}

module.exports = createWindow()
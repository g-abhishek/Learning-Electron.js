const { app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow(){
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        format: 'file',
        slashes: true
    }))

    win.on('closed', ()=> {
        win = null
    })
}

app.on('ready', createWindow)
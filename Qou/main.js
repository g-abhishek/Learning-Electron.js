// shell module is used to work on file system

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    win = new BrowserWindow({
        frame: false,
        show: false,
        height: 200,
        width: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('closed',()=> {
        win = null
    })
    win.once('ready-to-show', ()=>{
        win.show();


    })

    // win.webContents.openDevTools();
}

app.on('ready', createWindow);
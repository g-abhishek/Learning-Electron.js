const electron = require('electron');
const app = electron.app
const BrowserWindow = electron.BrowserWindow;
const url = require('url')
const path = require('path')

let win;

function createWindow(){
    win = new BrowserWindow();

    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, '../public/index.html'),
    //     protocol: 'File',
    //     slashes: true
    // }))
    // win.loadURL(`file://${path.join(__dirname, '../public/index.html')}`)
    win.loadURL('http://localhost:3000/')

    win.on('closed',()=>{
        win = null;
    })
}

app.on('ready', createWindow);
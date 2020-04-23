const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const createNewWindow = document.getElementById('createNewWindow');
createNewWindow.addEventListener('click', (event)=>{
    let winTwo = new BrowserWindow();
    winTwo.loadURL(url.format({
        pathname: path.join(__dirname, 'index2.html'), //base url path
        protocol: 'file',
        slashes: true
    }));
    winTwo.webContents.openDevTools();
})
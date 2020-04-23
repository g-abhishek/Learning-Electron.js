const electron = require('electron');
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const ipcMain = electron.ipcMain;
const dialog = electron.dialog;

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    win.on('closed', ()=>{
        win = null;
    })

    // win.webContents.openDevTools();

    ipcMain.on('open-error-dialog', (event)=>{
        dialog.showErrorBox('Error Mesage', 'Error Message Body');
        event.sender.send('opened-error-dialog', 'Main Process opened the error dialog');
    })
    ipcMain.on('async-message', (event)=>{
        // dialog.showErrorBox('Error Mesage', 'Error Message Body');
        event.sender.send('async-reply', 'Async Main Process opened the error dialog');
    })

    ipcMain.on('sync-message', (event)=>{
        event.returnValue = 'sync-reply'
        })

}

app.on('ready', createWindow);
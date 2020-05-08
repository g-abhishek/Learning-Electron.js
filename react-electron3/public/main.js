const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let ImageWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
      width: 800,
       height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(
        isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
        );

    ImageWindow = new BrowserWindow({
      width: 400,
       height: 400,
       parent: mainWindow,
       show: false,
       title: 'Image Window',
        webPreferences:{
            nodeIntegration: true
        }
    });
    ImageWindow.loadURL(
      isDev ? 'http://localhost:3000/image' : `file://${path.join(__dirname, '../build/index.html')}`
    );


  mainWindow.on('closed', () => mainWindow = null);
  ImageWindow.on('close', (e) => {
        e.preventDefault();
        ImageWindow.hide();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('toggle-image',(event, arg)=>{
    ImageWindow.show();
    ImageWindow.webContents.send('image', arg);
})
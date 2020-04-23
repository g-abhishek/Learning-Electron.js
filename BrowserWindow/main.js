const { app, BrowserWindow } = require('electron');

let win, dimenWindow, colorWindow, frameLessWindow;
let parentWindow, childWindow;

function createWindow(){
    // win = new BrowserWindow();
    // dimenWindow = new BrowserWindow({
    //     width: 400,
    //     height: 400,
    //     maxWidth: 600,
    //     maxHeight: 600
    // });
    // colorWindow = new BrowserWindow({
    //     backgroundColor: '#228b22'
    // });
    // frameLessWindow = new BrowserWindow({
    //     backgroundColor: '#800000',
    //     frame: false
    // })


    // win.on('closed', ()=>{
    //     win = null;
    // })

    parentWindow = new BrowserWindow({
        title: 'Parent'
    });
    childWindow = new BrowserWindow({
        show: false,
        parent: parentWindow,
        title: 'Child',
        modal: true
    })
    childWindow.loadURL('https://github.com')
    childWindow.once('ready-to-show', ()=>{
        childWindow.show()
    })

}



app.on('ready', createWindow);


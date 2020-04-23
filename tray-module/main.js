const { app, BrowserWindow, Tray, Menu } = require('electron')
const path = require('path')
const url = require('url')
const iconPath = path.join(__dirname, 'img.png')



let win;
let tray = null

// we are not creatin window

app.on('ready', ()=> {
    tray = new Tray(iconPath) //sets icon

    let templateMenu = [
        {
            label: 'Audio',
            submenu: [
                {
                    label: 'Low',
                    type: 'radio',
                    checked: true
                },
                {
                    label: 'High',
                    type: 'radio',
                },
            ]
        },
        {
            label: 'Video',
            submenu: [
                {
                    label: '1280X720',
                    type: 'radio',
                    checked: true
                },
                {
                    label: '1920x1080',
                    type: 'radio',
                },
            ]
        },
    ]
    const contxtMenu = Menu.buildFromTemplate(templateMenu)
    tray.setContextMenu(contxtMenu)
    tray.setToolTip('Tray Application') //on hover to icon

    
})
const electron = require('electron');
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const Menu = electron.Menu;
const MenuItem = electron.MenuItem; //context menu
const globalShortcuts = electron.globalShortcut; //shortcut key works when the window not in focus i.e. running on background



let win;

function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    app.on('closed', ()=>{
        win = null
    })
}



app.on('ready', ()=>{
    createWindow();

    const menuTemplate = [
        {
            label: 'Menu1',
            submenu: [
                {
                    label: 'submenu1',
                    click: ()=> console.log('clicked submenu1')
                },
                {
                    type:'separator'  //horizontal line between submenus
                },
                {
                    label: 'submenu2'
                }
            ]
        },
        {
            label: 'View',
            submenu: [
              { role: 'reload' },
              { role: 'forcereload' },
              { role: 'toggledevtools' },
              { type: 'separator' },
              { role: 'resetzoom' },
              { role: 'zoomin' },
              { role: 'zoomout' },
              { type: 'separator' },
              { role: 'togglefullscreen' }
            ]
          },
        {
            label: 'Edit',   //predrfined menu && predefined role and there implementation handle by electron
            submenu: [      //e.g. view, edit, window and so on
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
            ]
        },
        {
            label: 'Menu2',
            click: ()=> console.log('clicked menu2')
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About Electron',
                    click: ()=> electron.shell.openExternal('https://electron.atom.io'),
                    accelerator: 'Ctrl + Shift + H'  //shortcuts menu
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu)

    // context menu- right click //

    const contxtMenu = new Menu();
    contxtMenu.append(new MenuItem({     //appeends th menu item in context menu
        label: 'MenuItem1',
        click: ()=> console.log('context menu item1 clicked')
    }))
    contxtMenu.append(new MenuItem({
        role: 'selectall',
    }))
    contxtMenu.append(new MenuItem({
        role:'cut'
    }))
    contxtMenu.append(new MenuItem({
        role:'copy'
    }))
    contxtMenu.append(new MenuItem({
        role:'paste'
    }))

    win.webContents.on('context-menu', (e, params)=>{
        contxtMenu.popup(win, params.x, params.y)    //params x & y gives the position of mouse in window
    })


    // global shortcuts
    globalShortcuts.register('Alt+1', ()=> win.show())
});

app.on('will-quit', ()=> globalShortcuts.unregisterAll())


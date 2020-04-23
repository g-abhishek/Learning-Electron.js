const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

let errorBtn = document.getElementById('errorBtn');
let asyncBtn = document.getElementById('asyncBtn');
let syncBtn = document.getElementById('syncBtn');

errorBtn.addEventListener('click', ()=>{
    
    ipcRenderer.send('open-error-dialog');
    
})
ipcRenderer.on('open-error-dialog', (event, arg)=>{
    console.log(arg)
})


asyncBtn.addEventListener('click', ()=>{
    console.log('async msg 1')
    ipcRenderer.send('async-message');
    console.log('async msg 2')
})
ipcRenderer.on('async-reply', (event, arg)=>{
    console.log(arg)
})


syncBtn.addEventListener('click', ()=>{
    console.log('sync msg 1')
    const reply = ipcRenderer.sendSync('sync-message');
    console.log(reply)
    console.log('sync msg 2')
})
ipcRenderer.on('sync-reply', (event, arg)=>{
    console.log(arg)
})


const shell = require('electron').shell;

const openItemInFolder = document.getElementById('openItemInFolder');
openItemInFolder.addEventListener('click', (event)=> {
    shell.showItemInFolder('D:\\AG\\abhishek_resume.pdf')
})
const openItem = document.getElementById('openItem');
openItem.addEventListener('click', (event)=> {
    shell.openItem('D:\\AG\\abhishek_resume.pdf')
})
const openExternal = document.getElementById('openExternal');
openExternal.addEventListener('click', (event)=> {
    shell.openExternal('https://electron.atom.io')
})
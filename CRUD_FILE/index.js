const fs = require('fs') // work with file system
const path = require('path')

let pathName = path.join(__dirname, 'files')
console.log("pathname "+pathName)

const btnCreate = document.getElementById('btnCreate')
const btnRead = document.getElementById('btnRead')
const btnDelete = document.getElementById('btnDelete')

const fileName = document.getElementById('fileName')
const filecontents = document.getElementById('filecontents')

btnCreate.addEventListener('click', ()=> {
    let file = path.join(pathName, fileName.value) 
    let contents = filecontents.value

    fs.writeFile(file, contents, (err)=> {
        if(err){
            console.log('error while creating file')
        }
        console.log('file creation successful')
    })
})
btnRead.addEventListener('click', ()=> {
    let file = path.join(pathName, fileName.value) 
    console.log("file "+file)

    fs.readFile(file, (err, data)=> {
        if(err){
            console.log('error while creating file')
        }
        filecontents.value = data
        console.log(' file read successful')
    })
})
btnDelete.addEventListener('click', ()=> {
    let file = path.join(pathName, fileName.value) 

    fs.unlink(file, (err, data)=> {
        if(err){
            console.log('error while creating file')
        }
        fileName.value = ""
        filecontents.value = ""
        console.log(' file deleted successful')
    })
})




const electron = require('electron')
const ipcR = electron.ipcRenderer;



var createGroupBtn = document.getElementById('createGroup');

createGroupBtn.addEventListener('click', function () {

    ipcR.send('create-group');
})


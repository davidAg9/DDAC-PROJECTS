const electron = require('electron')
const ipcR = electron.ipcRenderer;

var submitForm = document.getElementById('addForm');
var backToMain = document.getElementById('backToMain');
backToMain.addEventListener('click', function () {
    ipcR.send('cancel');

})

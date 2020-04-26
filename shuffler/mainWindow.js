const electron = require('electron');
const Url = require('url')
const { BrowserWindow, app } = require('electron')
const ipc = electron.ipcMain;


//function for window creating 
var createWindow = function () {
    //main window win
    let win;
    win = new BrowserWindow({

        fullscreenWindowTitle: true,
        width: 1200,
        height: 700,
        // frame: false,
        webPreferences: {
            nodeIntegration: true,

        }

    });

    win.loadFile('main.html')
    win.show()
}
app.on('ready', createWindow);
//new sub window 1(using ipc process communication for async execution and to prevent any code block)
app.on('ready', () => {
    ipc.once('create-group', function (event) {

        let subWinCreateGroup;
        subWinCreateGroup = new BrowserWindow({
            width: 680,
            height: 410,
            // alwaysOnTop: true,

            frame: false,
            webPreferences: {
                nodeIntegration: true
            }
        })
        subWinCreateGroup.loadFile('./form.html');
        subWinCreateGroup.show()
    });

});
ipc.on('cancel', function (event, arg) {
    BrowserWindow.getFocusedWindow({ show: false });

});



app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }

});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)
app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})



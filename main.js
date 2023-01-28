const { BrowserWindow, app } = require('electron');

function createWindow() {

    const mainWindow = new BrowserWindow();
    mainWindow.loadFile('index.html');
}


app.whenReady().then(() => {
    createWindow();
});


//https://nodejs.org/api/process.html#processplatform
app.on('window-all-closed', () => {
    if (process.platform!== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if(BrowserWindows.getAllWindows().length === 0) {
        createWindow();
    }
});






const { BrowserWindow, app } = require('electron');

function createWindow() {

    const mainWindow = new BrowserWindow();
    mainWindow.loadFile('index.html');
}


app.whenReady().then(() => {
    createWindow();

    setTimeout(() => {
        app.quit();

    }, 3000)
});




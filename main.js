const { BrowserWindow, app } = require('electron');


app.whenReady().then(() => {

    const mainWindow = new BrowserWindow();
    mainWindow.loadFile('index.html');
});




const { BrowserWindow, app } = require('electron');
const windowStateKeeper = require('electron-window-state');

function createWindow() {

      // Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
 
  // Create the window using the state information
  const mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    title: "This is the main window"
  });

  // const mainWindow = new BrowserWindow();
mainWindow.loadFile('src/index.html');

    // automatically (the listeners will be removed when the window is closed)
  // and restore the maximized or full screen state
  mainWindowState.manage(mainWindow);
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






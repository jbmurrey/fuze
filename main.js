const {app, BrowserWindow} = require('electron')

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 600,
        height: 600,
        frame:false,
        webPreferences: {
          nodeIntegration: true
        }
      })
      const url = '../fuze/dist/fuze/index.html'
      //load local server to get html,css,javascript from angular
      mainWindow.loadURL("http://localhost:4200/")
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })
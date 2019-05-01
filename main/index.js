const electron = require('electron')
const path = require('path')

const { app, BrowserWindow, Menu } = electron

const DEVELOPMENT = process.env.NODE_ENV === 'development'

const startUrl = DEVELOPMENT
  ? 'http://localhost:3000'
  : `file://${path.join(__dirname, '../public/index.html')}`

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    height: 600,
    width: 800,
  })

  mainWindow.loadURL(startUrl)

  mainWindow.on('closed', () => {
    app.quit()
  })

  const mainMenu = Menu.buildFromTemplate(menuTemplate)
  if (process.platform === 'darwin') {
    Menu.setApplicationMenu(mainMenu)
  } else {
    mainWindow.setMenu(mainMenu)
  }
}

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit()
        },
      },
    ],
  },
  {
    label: 'View',
    submenu: [{ role: 'reload' }, { role: 'toggledevtools' }],
  },
]

app.on('ready', createWindow)

const path = require('path')
const electron = require('electron')
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} = require('electron-devtools-installer')

const { app, BrowserWindow, Menu } = electron

const DEVELOPMENT = process.env.NODE_ENV === 'development'

const startUrl = DEVELOPMENT
  ? 'http://localhost:3000'
  : `file://${path.join(__dirname, '../build/index.html')}`

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
    submenu: DEVELOPMENT
      ? [{ role: 'reload' }, { role: 'toggledevtools' }]
      : [{ role: 'reload' }],
  },
]

app.on('ready', async () => {
  if (DEVELOPMENT)
    await installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
  createWindow()
})

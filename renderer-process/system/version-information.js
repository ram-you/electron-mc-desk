const versionInfoBtn = document.getElementById('version-info')

const electronVersion = process.versions.electron
const chromeVersion = process.versions.chrome
const v8Version = process.versions.v8
const nodeVersion = process.versions.node

versionInfoBtn.addEventListener('click', () => {
  const message1 = `This app is using Electron version: ${electronVersion}`
  const message2 = `This app is using Chrome version: ${chromeVersion}`
  const message3 = `This app is using V8 version: ${v8Version}`
  const message4 = `This app is using Node version: ${nodeVersion}`

  document.getElementById('got-version-info').innerHTML = message1 + '<br>' + message2 + '<br>' + message3 + '<br>' + message4
})
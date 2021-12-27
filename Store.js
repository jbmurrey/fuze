const electron = window.require('electron');
const path = window.require('path');
const fs = window.require('fs');

class Store {
  constructor(options) {
    const userDataPath = (electron.app || electron.remote.app).getPath(
      'userData',
    );
    this.path = path.join(userDataPath, `${options.configName}.json`);
    console.log(this.path);
    this.data = parseDataFile(this.path, options.products);
  }

  get(key) {
    return this.data[key];
  }

  set(key, val) {
    this.data[key] = val;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
    
  }
}

function parseDataFile(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    return defaults;
  }
}

module.exports = Store;
/* eslint-env node */
/* eslint-disable camelcase */

const browsers = {
  safariMac9: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'El Capitan',
    browser: 'Safari',
    browser_version: '9.1'
  },
  safariMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'High Sierra',
    browser: 'Safari',
    browser_version: 'latest'
  },
  chromeMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'High Sierra',
    browser : 'Chrome',
    browser_version : 'latest'
  },
  firefoxMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'High Sierra',
    browser: 'Firefox',
    browser_version: 'latest'
  },
  edge15Win10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Edge',
    browser_version: '15'
  },
  edgeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Edge',
    browser_version: 'latest'
  },
  chromeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Chrome',
    browser_version: 'latest'
  },
  firefoxWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Firefox',
    browser_version: 'latest'
  },
  ie11Win10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'IE',
    browser_version: '11.0'
  },
  ie10Win8: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '8',
    browser: 'IE',
    browser_version: '10.0'
  },
  iphone7: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '10.0',
    device: 'iPhone 7',
    real_mobile: true
  },
  iphone11: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '13.0',
    device: 'iPhone 11',
    real_mobile: true
  },
  nexus5: {
    base: 'BrowserStack',
    os: 'android',
    os_version: '4.4',
    device: 'Google Nexus 5',
    real_mobile: true
  },
  pixel2: {
    base: 'BrowserStack',
    os: 'android',
    os_version: '8.0',
    device: 'Google Pixel 2',
    real_mobile: true
  },
  pixel4: {
    base: 'BrowserStack',
    os: 'android',
    os_version: '10.0',
    device: 'Google Pixel 4',
    real_mobile: true
  }
}

const browsersKeys = Object.keys(browsers)

module.exports = {
  browsers,
  browsersKeys
}

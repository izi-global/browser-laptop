/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const { getBraveExtUrl } = require('../lib/appUrlUtil')
const iconPath = getBraveExtUrl('img/newtab/defaultTopSitesIcon')

module.exports.pinnedTopSites = [
  {
    'key': 'https://twitter.com/izi_asia/|0',
    'count': 0,
    'favicon': `${iconPath}/twitter.png`,
    'location': 'https://twitter.com/izi_asia/',
    'themeColor': 'rgb(255, 255, 255)',
    'title': 'IZI Global (@izi_asia) | Twitter'
  }
]

module.exports.topSites = [
  {
    'key': 'https://twitter.com/izi_asia/|0',
    'count': 0,
    'favicon': `${iconPath}/twitter.png`,
    'location': 'https://twitter.com/izi_asia',
    'themeColor': 'rgb(255, 255, 255)',
    'title': 'IZI Global (@izi_asia) | Twitter'
  },
  {
    'key': 'https://github.com/izi_asia/|0',
    'count': 0,
    'favicon': `${iconPath}/github.png`,
    'location': 'https://github.com/izi_asia/',
    'themeColor': 'rgb(255, 255, 255)',
    'title': 'IZI Global | GitHub'
  },
  {
    'key': 'https://youtube.com/iziasia/|0',
    'count': 0,
    'favicon': `${iconPath}/youtube.png`,
    'location': 'https://youtube.com/iziasia/',
    'themeColor': 'rgb(255, 255, 255)',
    'title': 'IZI Browser - YouTube'
  },
  {
    'key': 'https://izi.asia/|0',
    'count': 0,
    'favicon': `${iconPath}/brave.ico`,
    'location': 'https://izi.asia/',
    'themeColor': 'rgb(255, 255, 255)',
    'title': 'IZI Global | Building a Better Web'
  },
  {
    'key': 'https://itunes.apple.com/app/brave-web-browser/id1052879175?mt=8|0',
    'count': 0,
    'favicon': `${iconPath}/appstore.png`,
    'location': 'https://itunes.apple.com/app/brave-web-browser/id1052879175?mt=8',
    'themeColor': 'rgba(255, 255, 255, 1)',
    'title': 'Brave Web Browser: Fast with built-in adblock on the App Store'
  },
  {
    'key': 'https://play.google.com/store/apps/details?id=com.brave.browser|0',
    'count': 0,
    'favicon': `${iconPath}/playstore.png`,
    'location': 'https://play.google.com/store/apps/details?id=com.brave.browser',
    'themeColor': 'rgb(241, 241, 241)',
    'title': 'Brave Browser: Fast AdBlocker - Apps on Google Play'
  }
]

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const React = require('react')
const { StyleSheet, css } = require('aphrodite/no-important')

class AboutWelcome extends React.Component {
  render() {
    // return <iframe data-test-id='welcomeIframe'
    //   className={css(styles.welcomeIframe)} src='http://dantri.com.vn' />
    return <div data-test-id='welcomeIframe'>Trang chào mừng sẽ được cập nhật sau - Đỗ Tiến Điệp - diepdt@izi.asia</div>
  }
}

const styles = StyleSheet.create({
  welcomeIframe: {
    width: '100%',
    height: '100%',
    border: 0
  }
})

module.exports = <AboutWelcome />

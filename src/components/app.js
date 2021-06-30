import { Component } from 'preact';

import styles from './app.css';

import Video from '/assets/video1.mp4';
import Logo from '/assets/marketer-logo.svg';
export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  
  render() {
    return (
      <div id="app">
        <div class={styles.wrapper}>
          <div class={styles.videowrapper} >
            <video class={styles.video}
              autoPlay="true" defaultMuted muted loop playsInline
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class={styles.logowrapper}>
            <img class={styles.logo} src={Logo} />
          </div>
        </div>
      </div>
    );
  }
}

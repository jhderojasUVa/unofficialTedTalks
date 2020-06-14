import { Lightning, MediaPlayer } from 'wpe-lightning-sdk'

const giphyCat = 'https://media.giphy.com/media/VxbvpfaTTo3le/giphy.mp4'

export default class NotFound extends Lightning.Component {
  static _template() {
    return {
      Media: {
        // https://media.giphy.com/media/VxbvpfaTTo3le/giphy.mp4
        // https://media.giphy.com/media/13tks6KkV5Crzq/giphy.mp4
        // https://media.giphy.com/media/WPWrU2AeK3aV2/giphy.mp4
        x: 0,
        y: 0,
        w: 1920,
        h: 1080,
        type: MediaPlayer,
      },
      Sorry: {
        y: 300,
        w: 1920,
        h: 200,
        text: {
          fontSize: 140,
          textAlign: 'center',
          fontFace: 'HelveticaLight',
          text: 'We are very sorry!',
        },
      },
      Explanation: {
        w: 1300,
        x: 300,
        y: 500,
        text: {
          fontSize: 36,
          textAlign: 'left',
          fontFace: 'HelveticaLight',
          text:
            "The page you are trying to see it's not there. Of course the problem is ours and we are working deeply to solve this problem as fast as possible. Meanwhile try to use the back button from your remote.",
        },
      },
    }
  }

  _init() {
    console.log('NotFound init')
    this.tag('Media').updateSettings({ consumer: this })
  }

  $mediaplayerCanplay() {
    console.log('can play')
    this.tag('Media').playPause()
  }

  _active() {
    // this.tag('Media').updateSettings({consumer: this});
    this.tag('Media').open(giphyCat)
  }

  _handleEnter() {
    console.log('gsdfgsdgdsgdsfg')
    this.tag('Media').playPause()
  }

  _focus() {
    console.log('dasdasds')
    this.tag('Media').playPause()
  }

  _getFocused() {
    return this
  }
}

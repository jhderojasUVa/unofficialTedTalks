import { Lightning, Utils, MediaPlayer, Router } from 'wpe-lightning-sdk'

const timingFunction = 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'

export default class Splash extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      alpha: 0,
      transitions: {
        alpha: {
          duration: 0.5,
          timingFunction,
        },
      },
      AudioPlayer: {
        type: MediaPlayer,
        w: 10,
        h: 10,
        x: 0,
        y: 0,
      },
      Logo: {
        x: w => w / 2 - 430 / 2,
        y: h => h / 2 - 220 / 2,
        w: 400,
        h: 150,
        scale: 0.5,
        alpha: 0.2,
        transitions: {
          scale: {
            duration: 1,
            timingFunction,
          },
          alpha: {
            duration: 0.5,
            timingFunction,
          },
        },
        Background: {
          w: 430,
          h: 250,
          x: -25,
          y: -25,
          rect: true,
          color: 0xffffffff,
        },
        TextUnoficial: {
          text: {
            textColor: 0xff222222,
            fontSize: 40,
            fontFace: 'Helvetica',
            text: 'unofficial',
          },
        },
        TextTed: {
          text: {
            textColor: 0xffff0000,
            fontSize: 190,
            fontFace: 'HelveticaBold',
            text: 'TED',
          },
        },
      },
    }
  }

  _init() {
    this._background = this.tag('Background')
    this._audioplayer = this.tag('AudioPlayer')
    this._logo = this.tag('Logo')

    // Set app consumer
    this._audioplayer.updateSettings({ consumer: this })

    this._introSound = Utils.asset('sound/intro.mp3')
    // this._audioplayer.open(this._introSound)
  }

  _active() {
    this._logo.setSmooth('scale', 1)
    this._logo.setSmooth('alpha', 1)
    // Navigate after 3 seconds to main
    setTimeout(() => {
      Router.navigate('Main')
    }, 3000)
  }

  _deactive() {}

  $mediaplayerEnded() {
    // The intro has finished go to main (after 500 miliseconds)
    setTimeout(() => {
      Router.navigate('Main')
    }, 500)
  }
}

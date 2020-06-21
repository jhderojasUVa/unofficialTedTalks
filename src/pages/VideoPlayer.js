import { Lightning, Utils, MediaPlayer } from 'wpe-lightning-sdk'

export default class VideoPlayer extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      x: 0,
      y: 0,
      Player: {
        w: 1920,
        h: 1080,
        x: 0,
        y: 0,
        type: MediaPlayer,
      },
      Controls: {
        type: Controls,
        signals: {
          playpause: true,
          forward: true,
        },
      },
      ProgressBar: {
        type: ProgressBar,
      },
    }
  }

  _init() {
    this._player = this.tag('Player')
    this._controls = this.tag('Controls')
    this._progressbar = this.tag('ProgressBar')
  }

  set data(value) {
    this._player.open(value)
    this._controls.isPlaying = true
  }

  playpause(value) {}

  forward(value) {}
}

export class Controls extends Lightning.Component {
  static _template() {
    return {
      Play: {},
      Forward: {},
    }
  }

  static _states() {
    return [
      class Playing extends this {
        $enter(event) {
          this.signal('playpause', 'play')
        }
      },
      class Paused extends this {
        $enter(event) {
          this.signal('playpause', 'pause')
        }
      },
      class Forward extends this {
        $enter(event) {
          this.signal('forward', true)
        }
      },
    ]
  }

  set isPlaying(value) {
    if (!!value) {
      this._setState('Playing')
    } else {
      this._setState('Paused')
    }
  }
}

export class ProgressBar extends Lightning.Component {
  static _template() {
    return {
      Bar: {
        w: 900,
        h: 2,
        color: 0xccffffff,
        rect: true,
      },
      WhereNow: {
        h: 15,
        color: 0xffffffff,
        rect: true,
      },
    }
  }

  init() {
    this._where = this.tag('WhereNow')
  }

  set time(value) {
    this._actualTime = value
    this._where.patch({
      smooth: {
        x: (value * 100) / 900,
      },
    })
  }
}

import { Lightning, Utils } from 'wpe-lightning-sdk'

export default class Logo extends Lightning.Component {
  static _template() {
    return {
      Text: {
        text: {
          textColor: 0xffff0000,
          fontFace: 'Helvetica',
          fontSize: 40,
          text: 'TED',
        },
      },
    }
  }

  _init() {
    console.log('Logo loaded')
  }
}

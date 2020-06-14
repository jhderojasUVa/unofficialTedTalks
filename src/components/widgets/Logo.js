import { Lightning, Utils } from 'wpe-lightning-sdk'

export default class Logo extends Lightning.Component {
  static _template() {
    return {
      Image: {
        src: Utils.asset('images/sky-logo.png'),
      },
    }
  }
}

import { Lightning, Utils, Router } from 'wpe-lightning-sdk'
import Rails from '../components/rail/Rail'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Rail: {
        type: Rails,
      },
    }
  }

  _build() {
    this._rail = this.tag('Rail')
  }

  set data(values) {
    // Pass the data into the Rail
    this._rail.data = values
  }

  _init() {}
}

import { Lightning } from 'wpe-lightning-sdk'
import RailItems from './RailItems'

export default class Rail extends Lightning.Component {
  static _template() {
    return {
      Flex: {
        x: 200,
        flex: {
          direction: 'column',
          padding: 20,
        },
        flexItems: {
          margin: 100,
        },
        rect: false,
        children: {
          // Items goes here
        },
      },
    }
  }

  set data(value) {
    this._flex.children = value.map((element, index) => {
      return {
        y: 400 * index,
        data: element,
        index,
        type: RailItems,
      }
    })
  }

  _build() {
    this._index = 0

    this._flex = this.tag('Flex')
  }

  _handleUp() {
    this._index = this._index > 0 ? this._index-- : 0
    this.setIndex(this._index)
  }

  _handleDown() {
    this._index =
      this._index === this._flex.children.length - 1
        ? this._flex.children.length - 1
        : this._index++
    this.setIndex(this._index)
  }

  setIndex(index) {}

  _focus() {
    console.log('I got the power')
  }

  _focusWidgets() {}

  _getFocused() {
    return this._flex
  }
}

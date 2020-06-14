import { Lightning, Utils } from 'wpe-lightning-sdk'

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      items: [
        {
          label: 'Newest',
          go: 'newest',
        },
        {
          label: 'Search',
          go: 'search',
        },
      ],
    }
  }

  set Items(v) {
    this.children = v.map((element, index) => {
      return {
        index,
        data: element,
        Text: {
          text: {
            text: label,
          },
        },
      }
    })
  }

  _init() {}
}

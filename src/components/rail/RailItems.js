import { Lightning, Utils } from 'wpe-lightning-sdk'

export default class RailItems extends Lightning.Component {
  static _template() {
    return {
      Image: {},
      Label: {
        w: 800,
        x: 700,
        y: 10,
        text: {
          fontFace: 'HelveticaBold',
          maxLines: 3,
          textOverflow: 'ellipsis',
          text: '',
        },
      },
      SmallDescription: {
        w: 950,
        x: 700,
        y: 180,
        text: {
          fontFace: 'HelveticaLight',
          maxLines: 4,
          textOverflow: 'ellipsis',
          text: '',
        },
      },
    }
  }

  _build() {
    this._image = this.tag('Image')
    this._label = this.tag('Label')
    this._smalldescription = this.tag('SmallDescription')
  }

  set data(value) {
    this._image.src = value.thumbnail
    this._label.text = value.title
    this._smalldescription.text = value.description
  }

  init() {}
}

// New talks model
export default class NewestTalks {
  constructor(item) {
    // Standar
    this._title = item.title
    this._pubDate = item.pubDate
    this._thumbnail = item.thumbnail
    this._description = item.description
    this._duration = item.enclosure.duration
    this._video = item.enclosure.video
    this._categories = item.categories
  }

  get title() {
    return this._title
  }

  get pubDate() {
    return this._pubDate
  }

  get thumbnail() {
    return this._thumbnail
  }

  get description() {
    return this._description
  }

  get video() {
    return this._video
  }

  get categoriesString() {
    return this._categories.join(', ')
  }

  get categoriesArray() {
    return this._categories
  }
}

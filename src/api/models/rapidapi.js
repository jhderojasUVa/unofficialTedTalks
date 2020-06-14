// RapidApi model
export class Speaker {
    constructor(item) {
        // Standar
        this._title = item.name
        this._pubDate = undefined
        this._thumbnail = item.thumbnail_url
        this._description = item.talkDesc
        this._duration = item.undefined
        this._youtubeUrl = item.youTubeUrl
        this._video = undefined
        this._categories = item.tags

        // Extras
        this._speakerBio = item.speakerBio
        this._speaker = item.speaker
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

    get youTubeUrl() {
        return this._youtubeUrl
    }

    get speaker() {
        return this._speaker
    }

    get speakerBio() {
        return this._speakerBio
    }
}

export class Description {
    constructor(item) {
        // Standar
        this._title = item.name
        this._pubDate = undefined
        this._thumbnail = item.thumbnail_url
        this._description = item.talkDesc
        this._duration = item.undefined
        this._youtubeUrl = item.youTubeUrl
        this._video = undefined
        this._categories = item.tags

        // Extras
        this._speakerBio = item.speakerBio
        this._speaker = item.speaker
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

    get youTubeUrl() {
        return this._youtubeUrl
    }

    get speaker() {
        return this._speaker
    }

    get speakerBio() {
        return this._speakerBio
    }
}
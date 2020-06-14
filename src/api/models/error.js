export default class Error {
    constructor(err) {
        this._error = err
    }

    get error() {
        return this._error
    }
}
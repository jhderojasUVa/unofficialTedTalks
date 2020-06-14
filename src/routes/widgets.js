import { Router } from 'wpe-lightning-sdk'

export default () => {
  Router.widget('splash')
  Router.widget('home', ['Menu', 'Logo'])
  // Router.widget("home/browse/series", ["Menu", "Logo"])
}

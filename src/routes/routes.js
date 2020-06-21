import { Router } from 'wpe-lightning-sdk'

import { Splash, Main, NotFound } from '../pages'

export default () => {
  Router.root('splash', Splash)
  Router.root('home', Main)
  Router.root('search', Search)
  Router.root('search/speaker/:itemSearch', Results)
  Router.root('search/description/:itemSearch', Results)

  Router.route('*', NotFound)

  Router.start()
}

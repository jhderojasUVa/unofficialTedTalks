import { Router } from 'wpe-lightning-sdk'

import { Splash, Main, Search, Result, NotFound } from '../pages'

export default () => {
  Router.root('splash', Splash)
  Router.route('home', Main)
  Router.route('search', Search)
  Router.route('search/speaker/:itemSearch', Result)
  Router.route('search/description/:itemSearch', Result)

  Router.route('*', NotFound)

  Router.start()
}

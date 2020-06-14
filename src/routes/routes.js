import { Router } from 'wpe-lightning-sdk'

import { Splash, NotFound } from '../pages'

export default () => {
  Router.root('splash', Splash)
  // Router.root('home', Main);
  // Router.route('home/browse/movies', Main);
  // Router.route('home/browse/series', Main);
  // Router.route('details/:itemType/:itemId', Details);
  // Router.route('details/:itemType/:itemId/play', Player);

  Router.route('*', NotFound)

  Router.start()
}

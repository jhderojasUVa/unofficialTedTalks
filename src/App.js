import { Lightning, Utils, Router } from 'wpe-lightning-sdk'
import { init as initApi } from './api/init'
import routes from './routes/routes'
import widgets from './routes/widgets'
import provider from './routes/providers'

import { Logo, Menu } from './components/widgets'

import { Splash, NotFound } from './pages/'

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') },
      { family: 'Helvetica', url: Utils.asset('fonts/Helvetica.ttf') },
      { family: 'HelveticaBold', url: Utils.asset('fonts/Helvetica-Bold.ttf') },
      { family: 'HelveticaLight', url: Utils.asset('fonts/Helvetica-Light.ttf') },
    ]
  }

  static _template() {
    return {
      Pages: {
        forceZIndexContext: true,
      },
      Widgets: {
        Logo: {
          x: 50,
          y: 50,
          type: Logo,
        },
        Menu: {
          x: 50,
          y: 200,
          type: Menu,
        },
      },
      Splash: {
        type: Splash,
      },
      // NotFound: {
      //   type: NotFound
      // }
    }
  }

  static _states() {
    return [
      class Widgets extends this {
        $enter(args, widget) {
          // store widget reference
          this._widget = widget

          // since it's possible that this behaviour
          // is non-remote driven we force a recalculation
          // of the focuspath
          this._refocus()
        }

        _getFocused() {
          // we delegate focus to selected widget
          // so it can consume remotecontrol presses
          return this._widget
        }
      },
    ]
  }

  _setup() {
    initApi(this.stage)

    Router.startRouter({
      appInstance: this,
      provider,
      routes,
      widgets,
    })
  }

  _init() {
    // this.tag('Splash').alpha = 1;
  }

  _getFocused() {
    return Router.getActivePage()
  }
}

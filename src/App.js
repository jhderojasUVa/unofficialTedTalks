import { Lightning, Utils } from 'wpe-lightning-sdk'
import routes from './routes/routes';
import widgets from './routes/widgets';
import provider from './routes/providers'

import Splash from './pages/Splash'

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') },
      { family: 'Helvetica', url: Utils.asset('fonts/Helvetica.ttf') },
      { family: 'HelveticaBold', url: Utils.asset('fonts/Helvetica-Bold.ttf') },
      // { family: 'HelveticaLight', url: Utils.asset('fonts/Helvetica-Light.ttf') },
    ]
  }

  static _template() {
    return {
      Pages: {
        forceZIndexContext: true
      },
      Widgets: {

      },
      Splash: {
        type: Splash 
      }
    }
  }

  _setup() {
      // initApi(this.stage);

      Router.startRouter({
          appInstance: this, provider, routes, widgets
      });
  }

  _init() {
    this.tag('Splash').alpha = 1;
  }

  _getFocused() {
  }
}

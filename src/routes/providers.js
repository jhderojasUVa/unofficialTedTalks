import { Router } from 'wpe-lightning-sdk'
import { getNewestTalks } from '../api/ted'

export default () => {
  Router.boot(async () => {
    // this will always be called
    console.log('Router boot')
  })

  Router.before(
    'home',
    async ({ page }) => {
      page.data = await getNewestTalks()
    },
    10 * 60 /* expires */
  )
}

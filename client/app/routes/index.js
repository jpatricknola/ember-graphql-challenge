import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

import { convertUTCDateToHumanizedDate } from '../utils/date'

export default class IndexRoute extends Route {
  @service
  apolloService

  beforeModel() { }

  async model(_params) {
    const model = await this.apolloService.fetchAllEvents()

    return model.reduce((acc, item) => {
      const latestEntry = acc.at(-1) || {}
      const day = convertUTCDateToHumanizedDate(item.start)

      latestEntry.day == day ? latestEntry.items.push(item) : acc.push({ day: day, items: [item] })

      return acc
    }, [])
  }
}

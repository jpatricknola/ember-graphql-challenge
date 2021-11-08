import Service from '@ember/service'
import { queryManager } from 'ember-apollo-client'
import mutation from 'peek-client/gql/mutations/booking.graphql'
import query from 'peek-client/gql/queries/events.graphql'

/**
 * Emberjs planner service
 */
export default class ApolloService extends Service {
  @queryManager
  apollo

  /**
   * Build an error status with proper message.
   * @param {*} e
   */
  returnErrorStatus(e) {
    const message = e.errors.map(item => item.message).join(',')
    return { status: 'error', message }
  }

  /**
   * Fetch all data with our main query
   */
  async fetchAllEvents() {
    return await this.apollo.query({ query }, 'events')
  }

  /**
   * Submit a booking
   */
  async bookNow(event_id, first_name, last_name) {
    return await this.apollo.mutate({
      mutation,
      variables: { event_id, first_name, last_name }
    })
  }
}


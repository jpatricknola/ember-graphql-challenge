import Ember from 'ember'
import Component from '@glimmer/component';
import { inject as service } from '@ember/service'
import { action } from '@ember/object'

export default class BookingComponent extends Component {
    @service
    apolloService

    @service
    router

    @action
    async bookNow(eventId) {
        try {
            const { createBooking } = await this.apolloService.bookNow(eventId, this.firstName, this.lastName)
            alert(`Booking created for ${this.firstName} ${this.lastName} `)
            this.router.transitionTo('index');
        }
        catch (e) {
            console.log(e)
            alert("Uh oh something went wrong")
        }
    }
}

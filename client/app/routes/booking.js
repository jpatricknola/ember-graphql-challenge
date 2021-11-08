import Route from '@ember/routing/route';

export default class BookingRoute extends Route {
    model(params) {
        const { event_id } = params
        return event_id
    }
}

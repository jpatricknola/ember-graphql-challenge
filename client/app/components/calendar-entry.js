import Component from '@glimmer/component';
import { startAndEndTime } from '../utils/date'

export default class CalendarEntryComponent extends Component {
    get time() {
        const { start, duration } = this.args.item
        return startAndEndTime(start, duration)
    }
}
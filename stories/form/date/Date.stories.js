import '../form.css';
import { liquid } from "../../shared/engine";

export default {
  title: 'Form Elements/Date and Time',
  tags: ['autodocs'],
  render: args => liquid(args.type === 'group' ? 'form/date/date-group' : 'form/date/date', args),
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['date', 'time', 'datetime-local', 'group'],
    }
  }
}

export const Date = {
  args: {
    label: 'Date',
    type: 'date'
  }
}

export const Time = {
  args: {
    label: 'Time',
    type: 'time'
  }
}

export const DateAndTimeSingle = {
  args: {
    label: 'Date and Time',
    type: 'datetime-local'
  }
}

export const DateAndTimeGroup = {
  args: {
    label: 'Date and Time',
    type: 'group'
  }
}
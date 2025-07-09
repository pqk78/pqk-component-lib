import '../form.css';
import { liquid } from "../../shared/engine";

export default {
  title: 'Form Elements/Name',
  tags: ['autodocs'],
  render: args => liquid('form/name/name', args),
  argTypes: {
    label: { control: 'text' },
    style: {
      control: { type: 'select' },
      options: [ 'traditional', 'overlay' ]
    },
    help: { control: 'text' },
    status: {
      control: { type: 'select' },
      options: [ 'default', 'error', 'success' ]
    }
  }
}

export const Traditional = {
  args: {
    label: 'Full Name',
    status: 'default',
    help: '',
  }
}
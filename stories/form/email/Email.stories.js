import '../form.css';
import { liquid } from '../../shared/engine';

export default {
  title: 'Form Elements/Email',
  tags: ['autodocs'],
  render: args => liquid('form/email/email', args),
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    status: {
      control: { type: 'select' },
      options: [ 'default', 'error', 'success' ]
    }
  }
}

export const Traditional = {
  args: {
    label: 'Email',
    placeholder: 'address@example.com',
    status: 'default',
  }
}
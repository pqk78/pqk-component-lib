import '../form.css';
import './password.webc';
import { liquid } from "../../shared/engine";

export default {
  title: 'Form Elements/Password',
  tags: ['autodocs'],
  render: args => liquid('form/password/password', args),
  argTypes: {
    label: { control: 'text' },
    status: {
      control: { type: 'select' },
      options: [ 'default', 'error', 'success' ]
    }
  }
}

export const Traditional = {
  args: {
    label: 'Password',
    status: 'default'
  }
}
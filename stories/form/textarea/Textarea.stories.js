import '../form.css';
import './text-area.webc';
import { liquid } from "../../shared/engine";

export default {
  title: 'Form Elements/Text Area',
  tags: ['autodocs'],
  render: args => liquid('form/textarea/textarea', args),
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
    },
    required: { control: 'boolean' },
    maxlength: { control: 'number' }
  }
}

export const Traditional = {
  args: {
    label: 'Field Label',
    placeholder: 'Prompt for input...',
    status: 'default',
    help: '',
    required: false,
  }
}

export const TraditionalRequired = {
  args: {
    label: 'Field Label',
    placeholder: 'Prompt for input...',
    status: 'default',
    help: '',
    required: true,
  }
}
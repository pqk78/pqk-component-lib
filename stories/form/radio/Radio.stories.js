import '../form.css';
import { liquid } from '../../shared/engine';
import lorem from '../../shared/lorem';

export default {
  title: 'Form Elements/Radio Buttons',
  tags: ['autodocs'],
  render: args => liquid('form/radio/radio', {...args, lorem}),
}

export const Traditional = {
  args: {
    label: 'Radio Button Group',
    items: 3,
  }
}
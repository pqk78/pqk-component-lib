import '../form.css';
import { liquid } from '../../shared/engine';
import lorem from '../../shared/lorem';

export default {
  title: 'Form Elements/Checkboxes',
  tags: ['autodocs'],
  render: args => liquid('form/checkbox/checkbox', {...args, lorem}),
}

export const Traditional = {
  args: {
    label: 'Checkbox Group',
    items: 3,
  }
}
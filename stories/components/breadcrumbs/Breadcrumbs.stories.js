import './breadcrumbs.css';
import { njk } from '../../shared/engine';

export default {
  title: 'UI Components/Breadcrumbs',
  tags: ['autodocs'],
  render: args => njk('components/breadcrumbs/breadcrumbs.njk', args),
  argTypes: {
    label: { control: 'text' },
    parent: { control: 'text' },
    grandparent: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Current Page',
    parent: 'Parent Page',
    grandparent: 'Grandparent Page',
    theme: 'primary'
  },
};

export const Secondary = {
  args: {
    label: 'Current Page',
    parent: 'Parent Page',
    grandparent: 'Grandparent Page',
    theme: 'secondary',
  },
};

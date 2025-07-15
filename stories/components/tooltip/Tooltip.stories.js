import './tooltip.css';
import { njk } from '../../shared/engine';

export default {
  title: 'UI Components/Tooltip',
  tags: ['autodocs'],
  render: args => njk('components/tooltip/tooltip.njk', args),
  argTypes: {
    label: { control: 'text' },
    tooltip: { control: 'text' },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Text requiring context or information',
    tooltip: 'Learn to control it. That gives us a general idea of how that mountain was made.',
    position: 'right',
    theme: 'primary'
  },
};

export const Secondary = {
  args: {
    label: 'Current Page',
    tooltip: 'Learn to control it. That gives us a general idea of how that mountain was made.',
    position: 'top',
    theme: 'secondary',
  },
};

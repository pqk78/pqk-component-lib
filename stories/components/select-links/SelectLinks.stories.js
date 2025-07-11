import './select-links.css';
import { liquid } from '../../shared/engine';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UI Components/Select Links',
  tags: ['autodocs'],
  render: args => liquid('components/select-links/select-links', args),
  argTypes: {
    label: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'reverse'],
    },
    items: {
      control: {
        type: 'number',
        min: 3,
        max: 12,
      },
    }
  },
};

export const Primary = {
  args: {
    label: 'Choose a Destination',
    theme: 'primary',
    items: 5,
  },
};

export const Secondary = {
  args: {
    label: 'Choose a Destination',
    theme: 'secondary',
    items: 5,
  },
};

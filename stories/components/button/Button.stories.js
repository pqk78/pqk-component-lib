import './button.css';
import { liquid } from '../../shared/engine';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: args => liquid('components/button/button', args),
  argTypes: {
    label: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'reverse'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'compact'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Button',
    theme: ''
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    theme: 'secondary',
  },
};

export const Reverse = {
  args: {
    label: 'Button',
    theme: 'reverse',
  },
};

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

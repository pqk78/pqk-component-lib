import './accordion.css';
import { liquid } from '../../shared/engine';

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  render: args => liquid('components/accordion/accordion', { ...args }),
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['compact', 'large'],
    },
  },
};

export const Large = {
  args: {
    label: 'Accordion',
    size: 'large',
  },
};

export const Compact = {
  args: {
    label: 'Accordion',
    size: 'compact',
  },
};
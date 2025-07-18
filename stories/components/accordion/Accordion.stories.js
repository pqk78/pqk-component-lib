import './accordion.css';
import { njk } from '../../shared/engine';

export default {
  title: 'UI Components/Accordion',
  tags: ['autodocs'],
  render: args => njk('components/accordion/accordion.njk', args),
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['compact', 'large'],
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};

export const Large = {
  args: {
    label: 'Accordion',
    size: 'large',
    theme: 'primary'
  },
};

export const Compact = {
  args: {
    label: 'Accordion',
    size: 'compact',
    theme: 'primary'
  },
};

export const LargeSecondary = {
  args: {
    label: 'Accordion',
    size: 'large',
    theme: 'secondary'
  },
};

export const CompactSecondary = {
  args: {
    label: 'Accordion',
    size: 'compact',
    theme: 'secondary'
  },
};
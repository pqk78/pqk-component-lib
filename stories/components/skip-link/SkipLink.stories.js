import '../../shared/utility-classes.css';
import './skip-link.css';
import { njk } from '../../shared/engine';

export default {
  title: 'UI Components/Skip Link',
  tags: ['autodocs'],
  render: args => njk('components/skip-link/skip-link.njk', args),
  argTypes: {
    label: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'reverse'],
    },
    style: {
      control: { type: 'select' },
      options: ['block', 'overlay'],
    },
  },
};

export const PrimaryBlock = {
  args: {
    label: 'Skip to Main Content',
    theme: '',
    style: 'block'
  },
};

export const SecondaryBlock = {
  args: {
    label: 'Skip to Main Content',
    theme: 'secondary',
    style: 'block'
  },
};

export const ReverseBlock = {
  args: {
    label: 'Skip to Main Content',
    theme: 'reverse',
    style: 'block'
  },
};

export const PrimaryOverlay = {
  args: {
    label: 'Skip to Main Content',
    theme: '',
    style: 'overlay'
  },
};

export const SecondaryOverlay = {
  args: {
    label: 'Skip to Main Content',
    theme: 'secondary',
    style: 'overlay'
  },
};

export const ReverseOverlay = {
  args: {
    label: 'Skip to Main Content',
    theme: 'reverse',
    style: 'overlay'
  },
};

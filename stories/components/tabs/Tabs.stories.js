import './tabs.css';
import './tabbed-content.webc';
import { liquid } from '../../shared/engine';

export default {
  title: 'UI Components/Tabs',
  tags: ['autodocs'],
  render: args => liquid('components/tabs/tabs', args),
  argTypes: {
    items: {
      control: {
        type: 'number',
        min: 1,
        max: 12
      }
    }
  }
}

export const Tabs = {
  args: {
    items: 5
  }
}
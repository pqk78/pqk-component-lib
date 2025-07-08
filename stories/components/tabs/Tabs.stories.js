import './tabs.css';
import './tabbed-content.webc';
import { liquid } from '../../shared/engine';
import lorem from '../../shared/lorem';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: args => liquid('components/tabs/tabs', {...args, lorem}),
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
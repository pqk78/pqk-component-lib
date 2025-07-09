import './router.css';
import { liquid } from "../../shared/engine"
import lorem from "../../shared/lorem";

export default {
  title: 'UI Components/Router',
  tags: ['autodocs'],
  render: args => liquid('components/router/router', {...args, lorem}),
  argTypes: {
    label: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: ['grid', 'list', 'reverse'],
    },
    images: { control: 'boolean' },
    descriptions: { control: 'boolean' },
    items: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
      },
    }
  },
}

export const Grid = {
  args: {
    theme: 'grid',
    images: false,
    items: 6,
    descriptions: true,
  }
}

export const GridWithImages = {
  args: {
    theme: 'grid',
    images: true,
    items: 6,
    descriptions: true,
  }
}

export const List = {
  args: {
    theme: 'list',
    images: false,
    items: 5,
    descriptions: true,
  }
}

export const ListWithImages = {
  args: {
    theme: 'list',
    images: false,
    items: 6,
    descriptions: true,
  }
}
import { Liquid } from 'liquidjs';

const engine = new Liquid({
  root: ['stories/'],
  extname: '.liquid',
});

export const liquid = (template, args) => engine.renderFileSync(template, {...args});

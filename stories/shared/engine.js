import { Liquid } from 'liquidjs';

const engine = new Liquid({
  root: ['stories/'],
  extname: '.liquid',
  jsTruthy: true,
});

export const liquid = (template, args) => engine.renderFileSync(template, {...args});

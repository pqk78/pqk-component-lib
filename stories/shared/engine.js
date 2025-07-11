import { Liquid } from 'liquidjs';
import lorem from './lorem';

const engine = new Liquid({
  root: ['stories/'],
  extname: '.liquid',
  jsTruthy: true,
});

export const liquid = (template, args) => engine.renderFileSync(template, {...args, lorem, delta: new Date().getMilliseconds()});

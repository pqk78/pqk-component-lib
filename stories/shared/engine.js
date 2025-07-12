import { Liquid } from 'liquidjs';
import lorem from './lorem';
import nunjucks from 'nunjucks';

export const njk = (template, args) => {
  nunjucks.configure('stories', {
  });
  return nunjucks.render(template, {...args, lorem, delta: new Date().getMilliseconds()});
}

export const liquid = (template, args) => {
  const engine = new Liquid({
    root: ['stories/'],
    extname: '.liquid',
    jsTruthy: true,
  });
  return engine.renderFileSync(template, {...args, lorem, delta: new Date().getMilliseconds()});
};

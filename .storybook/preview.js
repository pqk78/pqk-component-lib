import '../stories/shared/global.css';
import '../stories/shared/typography.css';
import '../stories/shared/storybook.css';

export default {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  }, 
};
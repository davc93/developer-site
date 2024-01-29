import type { Preview } from "@storybook/html";
import "../src/globals.css"
import "../../../styles/variables.css"
const preview: Preview = {
  parameters: {
    backgrounds:{
      default: 'dark',
      
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

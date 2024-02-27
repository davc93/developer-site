import type { Preview } from "@storybook/react";
import "../../../styles/variables.css"
import "../../../styles/globals.css"
const preview: Preview = {
  parameters: {
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

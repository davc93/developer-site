import type { StoryObj, Meta } from '@storybook/html';
import { TextFieldInputType, TextFieldProps } from '../components/atoms/TextField';
import { createTextField } from '../components/atoms/TextField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'TextField',
  tags: ['autodocs'],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createTextField(args);
  },
  argTypes: {
    label: { control: 'text' },

    inputType: { control: 'select',options:[
        TextFieldInputType.PASSWORD,
        TextFieldInputType.TEXT
    ] },
    
  },
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<TextFieldProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const TextField: Story = {
  args: {
    label:"Name",
    inputType:TextFieldInputType.TEXT,
    
  },
};

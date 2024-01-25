import type { StoryObj, Meta } from '@storybook/html';
import { ButtonProps,ButtonSizes } from '../components/atoms/Button';
import { createButton } from '../components/atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton(args);
  },
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: [ButtonSizes.LARGE, ButtonSizes.WIDE],
    },
    loading:{
      control:"boolean",
      defaultValue:false
    },
    disable:{
      control:"boolean",
      defaultValue:false
    }
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    size: ButtonSizes.LARGE,
    label: 'Button',
  },
};

export const Wide: Story = {
  args: {
    size: ButtonSizes.WIDE,
    label: 'Button',
  },
};
export const Loading: Story = {
  args: {
    label: 'Button',
    loading:true
  },
};
export const Disable: Story = {
  args: {
    label: 'Button',
    disable:true
  },
};

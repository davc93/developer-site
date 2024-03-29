import type { StoryObj, Meta } from '@storybook/html';
import { ButtonProps,ButtonSizes } from '../components/atoms/Button';
import { createButton } from '../components/atoms/Button';
import { LinkIcon } from '../components/icons/ExternalLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
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
      options: [ButtonSizes.LARGE, ButtonSizes.WIDE,ButtonSizes.SMALL],
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
    label: 'More details',
    loading:false,
    disable:false,
    icon:LinkIcon()
  },
};

export const Wide: Story = {
  args: {
    size: ButtonSizes.WIDE,
    label: 'Button',
    loading:false,
    icon:LinkIcon(),
    disable:false

  },
};

export const Small: Story = {
  args: {
    size: ButtonSizes.SMALL,
    label: 'Button',
    loading:false,
    icon:LinkIcon(),

    disable:false

  },
};
export const Loading: Story = {
  args: {
    label: 'Button',
    loading:true,
    disable:false,
    icon:LinkIcon()

  },
};
export const Disable: Story = {
  args: {
    label: 'Button',
    loading:false,
    icon:LinkIcon(),

    disable:true
  },
};

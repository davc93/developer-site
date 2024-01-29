import type { StoryObj, Meta } from '@storybook/html';
import { JobCardProps } from '../components/molecules/JobCard';
import { createJobCard } from '../components/molecules/JobCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'JobCard',
  tags: ['autodocs'],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createJobCard(args);
  },
  argTypes: {
    
  },
} satisfies Meta<JobCardProps>;

export default meta;
type Story = StoryObj<JobCardProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    jobLogo:"https://linkedin.com",
    jobTitle:"Fullstack developer",
    description:"Desarrollador",
    from:'08-03-2023',
    to:"present",
    jobUrl:"https://linkedin.com"
  },
};


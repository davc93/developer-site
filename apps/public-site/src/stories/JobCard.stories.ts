import type { StoryObj, Meta } from '@storybook/html'
import { type JobCardProps, createJobCard } from '../components/molecules/JobCard'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'JobCard',
  tags: ['autodocs'],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createJobCard(args)
  },
  argTypes: {}
} satisfies Meta<JobCardProps>

export default meta
type Story = StoryObj<JobCardProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    jobLogo:
      'https://media.licdn.com/dms/image/D4E0BAQFU3jYG-KbbPA/company-logo_200_200/0/1704822082038/flow_sa_logo?e=1714608000&v=beta&t=JoX-2604hLn2vtGAEyONlWBRmvKRlhqJeEG3CYx2fa8',
    jobTitle: 'Fullstack developer',
    organization: 'Flow S.A',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.',
    from: '08-03-2023',
    to: 'present',
    jobUrl: 'https://linkedin.com'
  }
}

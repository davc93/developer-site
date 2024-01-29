import type { StoryObj, Meta } from "@storybook/html";
import { ProjectCardProps } from "../components/molecules/ProjectCard";
import { createProjectCard } from "../components/molecules/ProjectCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ProjectCard",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createProjectCard(args);
  },
  argTypes: {},
} satisfies Meta<ProjectCardProps>;

export default meta;
type Story = StoryObj<ProjectCardProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large: Story = {
  args: {
    id: 3,
    title: "My own website project",
    shortDescription: "My personal website and their different apps My personal website and their different apps My personal website and their different apps",
    published:true,
    slug:"davc93",
    labels: [
      {
        id: 1,
        title: "Typescript",
        image:
          "https://res.cloudinary.com/dxryc5jgr/image/upload/v1680988646/developer-site/typescript.svg.svg",
        labelProject: {
          order: 1,
          createdAt: "2023-10-14T21:56:58.025Z",
        },
      },
      {
        id: 6,
        title: "NodeJS",
        image:
          "https://res.cloudinary.com/dxryc5jgr/image/upload/v1680990960/developer-site/nodejs.svg.svg",
        labelProject: {
          order: 5,
          createdAt: "2023-10-14T21:56:58.026Z",
        },
      },
      {
        id: 8,
        title: "CSS",
        image:
          "https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991129/developer-site/css3.svg.svg",
        labelProject: {
          order: 2,
          createdAt: "2023-10-14T21:56:58.027Z",
        },
      },
      {
        id: 7,
        title: "Vite",
        image:
          "https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991084/developer-site/vite.svg.svg",
        labelProject: {
          order: 3,
          createdAt: "2023-10-14T21:56:58.029Z",
        },
      },
      {
        id: 31,
        title: "Vercel",
        image:
          "https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992206/developer-site/vercel-icon.svg.svg",
        labelProject: {
          order: 4,
          createdAt: "2023-10-14T21:56:58.033Z",
        },
      },
    ],

    images: [
      {
        id: 151,
        url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1695250074/davc93/developer-site.jpg.jpg",
      },
    ],
  },
};

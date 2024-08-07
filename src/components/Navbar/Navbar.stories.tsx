import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Navbar from './Navbar';
import MemoryRouterWrapper from '../../MemoryRouterWrapper';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouterWrapper>
        <Story />
      </MemoryRouterWrapper>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <Navbar />;

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const homeLink = await canvas.getByText('Home');
  await userEvent.click(homeLink);
};

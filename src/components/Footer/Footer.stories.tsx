import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Footer from './Footer';
import MemoryRouterWrapper from '../../MemoryRouterWrapper';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <MemoryRouterWrapper>
        <Story />
      </MemoryRouterWrapper>
    ),
  ],
} as Meta;

const Template: StoryFn = () => <Footer />;

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const contactLink = await canvas.getByText('Contact');
  await userEvent.click(contactLink);
};

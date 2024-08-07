import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

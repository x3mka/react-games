import { Story, Meta } from '@storybook/react';
import { Grid, GridProps } from './grid';
import data from '@react-games/jap-cross-data';

export default {
  component: Grid,
  title: 'Cross/Grid',
} as Meta;

const Template: Story<GridProps> = (args) => <div className="flex"><Grid {...args} /></div>;

export const S01 = Template.bind({});
S01.args = {  cross: data['s01'] };

export const S02 = Template.bind({});
S02.args = {  cross: data['s02'] };

export const S03 = Template.bind({});
S03.args = {  cross: data['s03'] };

export const S05 = Template.bind({});
S05.args = {  cross: data['s05'] };

export const S06 = Template.bind({});
S06.args = {  cross: data['s06'] };

export const M01 = Template.bind({});
M01.args = {  cross: data['m01'] };


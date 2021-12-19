import { Story, Meta } from '@storybook/react';
import { Pane } from './pane';
import data from '@react-games/jap-cross-data';
import {Cross} from "../../../../jap-cross/src";

export default {
  component: Pane,
  title: 'Cross/Pane',
} as Meta;

const Template: Story<{ cross: Cross }> = (args) => {
  return (
    <div className="flex">
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-1">
        <div />
        <Pane nums={args.cross.topNumbers()} orientation="top" />
        <Pane nums={args.cross.leftNumbers()} orientation="left" />
        <div className="flex justify-center items-center">Grid</div>
      </div>
    </div>
  )
}

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


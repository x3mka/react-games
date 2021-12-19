import { Story, Meta } from '@storybook/react';
import PaneCell, {PaneCellProps} from "./pane-cell";
import Grid from "../grid/grid";

export default {
  component: PaneCell,
  title: 'Cross/PaneCell',
} as Meta;

const Template: Story<PaneCellProps> = (args) => <PaneCell {...args} />;

export const Default = () => {
  return (
    <div className="flex gap-1">
      <PaneCell num={3} />
      <PaneCell num={null} />
      <PaneCell num={14} />
      <PaneCell num={88} />
    </div>
  )
};
Default.args = {};

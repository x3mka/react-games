import { Story, Meta } from '@storybook/react';
import GridCell, {GridCellClickHandler, GridCellProps} from "./grid-cell";
import Grid from "../grid/grid";

export default {
  component: GridCell,
  title: 'Cross/GridCell',
} as Meta;

const Template: Story<GridCellProps> = (args) => <GridCell {...args} />;

export const Default = () => {
  const onClick: GridCellClickHandler = (r, c) => {
    console.log("Clicked:", r, c)};
  return (
    <div className="flex gap-1">
      <GridCell row={0} col={1} state={0} onClick={onClick} />
      <GridCell row={0} col={2} state={1} onClick={onClick} />
      <GridCell row={0} col={3} state={-1} onClick={onClick} />
    </div>
  )
};
Default.args = {};

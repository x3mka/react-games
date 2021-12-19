import {Cross as CrossClass} from '@react-games/jap-cross';
import GridCell, {GridCellClickHandler, GridCellState} from "../grid-cell/grid-cell";

export type GridState = GridCellState[][];

export interface GridProps {
  cross: CrossClass
}

export function Grid({cross}: GridProps) {
  //console.log(cross);
  const onCellClick: GridCellClickHandler = (r, c) => {
    console.log("Clicked:", r, c);
  }

  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cross.width}, 22px)`,
    gridTemplateRows: `repeat(${cross.height}, 22px)`,
    gridGap: '1px'
  }
  return (
    <div style={style} className="">
      {
        cross.data.map((row, rId) => {
          return row.map((c, cId) => {
            return <GridCell
              key={`${rId}-${cId}`}
              row={rId} col={cId}
              state={c}
              onClick={onCellClick}
            />
          })
        })
      }
    </div>
  );
}

export default Grid;

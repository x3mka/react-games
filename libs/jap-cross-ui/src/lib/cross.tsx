import {Cross as CrossClass} from '@react-games/jap-cross';
import Cell from "./cell";

export interface CrossProps {
  cross: CrossClass
}

export function Cross({cross}: CrossProps) {
  //console.log(cross);
  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cross.width}, 20px)`,
    gridTemplateRows: `repeat(${cross.height}, 20px)`,
    gridGap: '1px'
  }
  return (
    <div style={style} className="">
      {
        cross.data.map((row, rId) => {
          return row.map((c, cId) => {
            return <Cell key={`${rId}-${cId}`} state={c} />
          })
        })
      }
    </div>
  );
}

export default Cross;

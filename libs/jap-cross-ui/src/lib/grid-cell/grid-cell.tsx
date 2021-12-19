import clsx from "clsx";

export type GridCellState = 0 | 1 | -1;
export type GridCellClickHandler = (r: number, c: number) => void;

export interface GridCellProps {
  row: number,
  col: number,
  size?: number,
  state: GridCellState,
  onClick: GridCellClickHandler,
  onMouseEnter?: MouseEvent,
  onMouseLeave?: MouseEvent
}

export function GridCell({row, col, onClick, size = 22, state}: GridCellProps) {
  return (
    <div
      onClick={() => onClick(row, col)}
      style={{width: `${size}px`, height: `${size}px`}}
      className={clsx(
      `border border-gray-500 flex justify-center items-center`,
      {'bg-white': state === 0},
      {'bg-gray-600': state === 1}
    )}>
      {state === -1 && <div className="rounded-full w-1 h-1 bg-gray-700" />}
    </div>
  );
}

export default GridCell;

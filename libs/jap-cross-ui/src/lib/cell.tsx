import clsx from "clsx";

export type CellState = 'blank' | 'filled' | 'closed';

export interface CellProps {
  size?: number,
  state: number
}

export function Cell({size = 20, state}: CellProps) {
  return (
    <div style={{width: `${size}px`, height: `${size}px`}}
         className={clsx(
      `border border-gray-500`,
      {'bg-white': state === 0},
      {'bg-gray-800': state === 1}
    )}></div>
  );
}

export default Cell;

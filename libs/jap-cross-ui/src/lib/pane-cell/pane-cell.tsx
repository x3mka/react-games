import clsx from "clsx";

// export type PaneCellState = 0 | 1 | -1;

export interface PaneCellProps {
  num: number | null,
  size?: number,
}

export function PaneCell({num, size = 22}: PaneCellProps) {
  return (
    <div
      style={{width: `${size}px`, height: `${size}px`}}
      className={clsx(
      `border border-gray-500 flex justify-center items-center font-semibold text-sm`,
    )}>
      {num}
    </div>
  );
}

export default PaneCell;

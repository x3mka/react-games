import GridCell from "../grid-cell/grid-cell";
import PaneCell from "../pane-cell/pane-cell";
import clsx from "clsx";

export type PaneNumber = number | null;

export interface PaneProps {
  nums: PaneNumber[][],
  orientation: 'top' | 'left'
}

export function Pane({nums, orientation}: PaneProps) {

  // console.log("Nums:", nums)
  const n = nums.length;
  const m = Math.max(...nums.map(r => r.length));
  // console.log("Size:", n, m, orientation)

  const expandedNums: PaneNumber[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    expandedNums[i] = new Array(m);
    for (let j = 0; j < m; j++) {
      if (j < m - nums[i].length)
        expandedNums[i][j] = null;
      else
        expandedNums[i][j] = nums[i][nums[i].length + j - m]
    }
  }
  // console.log("Expanded:", expandedNums);

  const isTop = orientation === 'top';

  const paneLines = expandedNums.map((_, i) => {
    return (
      <div className={clsx("flex", isTop ? 'flex-col' : 'flex-row', 'gap-[1px]')} key={i}>
        {expandedNums[i].map((_, j) => {
          return <PaneCell key={j} num={expandedNums[i][j]} />
        })}
      </div>
    )
  })

  return (
    <div className={clsx("flex", isTop ? 'flex-row' : 'flex-col', 'gap-[1px]')}>
      {paneLines}
    </div>
  );
}

export default Pane;

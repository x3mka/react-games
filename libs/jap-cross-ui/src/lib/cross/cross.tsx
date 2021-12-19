import clsx from "clsx";
import Pane from "../pane/pane";
import Grid from "../grid/grid";
import {Cross as CrossClass} from "../../../../jap-cross/src";


export interface CrossProps {
  cross: CrossClass,
}

export function Cross({cross}: CrossProps) {
  return (
    <div className="flex">
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-1">
        <div />
        <Pane nums={cross.topNumbers()} orientation="top" />
        <Pane nums={cross.leftNumbers()} orientation="left" />
        <Grid cross={cross} />
      </div>
    </div>
  )
}

export default Cross;

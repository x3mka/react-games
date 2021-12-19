import {leftNumbers, topNumbers, validate} from "./utils";

export type CrossNumber = 0 | 1;
export type CrossData = CrossNumber[][];

export class Cross {

  width: number;
  height: number;
  data: CrossData

  constructor(data: CrossData) {
    validate(data);
    this.data = data;
    this.height = data.length;
    this.width = data[0].length;
  }

  topNumbers() {
    return topNumbers(this.data);
  }

  leftNumbers() {
    return leftNumbers(this.data);
  }
}


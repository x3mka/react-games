import {CrossData} from "./cross";

export const validate = (data: CrossData) => {
  const h = data.length;
  if (h === 0) throw new Error('Data is empty.');
  const w = data[0].length;
  if (w === 0) throw new Error('Row #0 has no data.');
  data.forEach((row, idx) => {
    if (row.length !== w)
      throw new Error(`Rows 0 and ${idx} have different number of elements.`)
    row.forEach(col => {
      if (data[idx][col] !== 0 && data[idx][col] != 1)
        throw new Error(`Data[${idx}][${col}]: only 0 and 1 supported.`)
    })
  })
  return true;
}

export const topNumbers = (data: CrossData) => {
  const h = data.length;
  const w = data[0].length;
  const res = [];
  for (let col = 0; col < w; col++) {
    const nums = [];
    let c = 0;
    for (let row = 0; row < h; row++) {
      if (data[row][col] === 1) {
        c++;
      } else {
        if (c > 0) {
          nums.push(c);
          c = 0;
        }
      }
    }
    if (c > 0)
      nums.push(c);
    res.push(nums);
  }
  return res;
}

export const leftNumbers = (data: CrossData) => {
  const h = data.length;
  const w = data[0].length;
  const res = []
  for (let row = 0; row < h; row++) {
    const nums = [];
    let c = 0;
    for (let col = 0; col < w; col++) {
      if (data[row][col] === 1) {
        c++;
      } else {
        if (c > 0) {
          nums.push(c);
          c = 0;
        }
      }
    }
    if (c > 0)
      nums.push(c);
    res.push(nums);
  }
  return res;
}

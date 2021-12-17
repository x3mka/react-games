import {Cross} from "@react-games/jap-cross";

import s01 from './small/s01-smile.json';
import s02 from './small/s02-dolphin.json';
import s03 from './small/s03-ship.json';
import s04 from './small/s04-elephant.json';
import s05 from './small/s05-elk.json';
import s06 from './small/s06-cat.json';

import m01 from './medium/m01-bear.json';


const rawCrosses = {
  s01, s02, s03, s04, s05, s06,
  m01
}

const crosses: Record<string, Cross> = {};
Object.entries(rawCrosses).forEach(([k, v]) => {
  crosses[k] = new Cross(v.data);
})

export default crosses;


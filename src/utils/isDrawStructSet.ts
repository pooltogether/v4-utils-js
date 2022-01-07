import { Draw } from '../types';

// @TODO: Add more reasonable checks for validating the Draw object.
export function isDrawStructSet(draw: Draw): boolean {
  return draw && draw.drawId > 0 && draw.winningRandomNumber.gt(0);
}

export default isDrawStructSet;

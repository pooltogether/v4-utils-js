import { Draw } from "../types";

// @TODO: Add more reasonable checks for validating the Draw object.
export function validateDrawStructIsSet(draw: Draw): boolean {
  return draw && draw.drawId > 0 && draw.timestamp > 0;
}

export default validateDrawStructIsSet;

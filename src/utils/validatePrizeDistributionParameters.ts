import { Draw } from "../types";

export function validateDrawParameters(draw: Draw): boolean {
  return draw && draw.drawId > 0 && draw.timestamp > 0;
}

export default validateDrawParameters;

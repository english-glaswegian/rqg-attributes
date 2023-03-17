import { modifier } from './modifier.js';

export const hit_points = (con, siz, pow) => {
  return con + modifier(siz, 1) + modifier(pow, 1, false)
}

export const modifier = (stat, multiplier, major=true, positive=true) => {
  let left_shift = -2;
  let sign = -1;
  let ordinal = parseInt(Math.ceil(stat / 4))
  
  if(major) left_shift = -3

  if(positive) sign = 1

  return parseInt((ordinal + left_shift) * sign * multiplier);  
}

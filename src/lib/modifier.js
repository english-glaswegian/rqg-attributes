export const modifier = (stat, multiplier, major=true, positive=true) => {
  let left_shift = -2;
  let sign = -1;
  let ordinal = parseInt(Math.ceil(stat / 4))
  
  if(major) left_shift = -3

  if(positive) sign = 1

  if(!major && ordinal > 1 && ordinal < 5){
    left_shift = -ordinal;
  } else if(!major && ordinal > 4){
    left_shift = -4;
  }

  return parseInt((ordinal + left_shift) * sign * multiplier);  
}

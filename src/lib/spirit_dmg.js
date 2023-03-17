export const spirit_dmg= (pow, cha) => {
  
  const pow_cha = pow + cha;

  if(pow_cha < 13) {
    return '1D3';
  } else if (pow_cha < 25) {
    return '1D6';
  } else if (pow_cha < 33) {
    return '1D6+1';
  } else if (pow_cha < 41) {
    return '1D6+3';
  } else if (pow_cha < 57) {
    return '2D6+3';
  } else {
    const dice = Math.ceil((pow_cha - 56)/16) + 2
    return `${dice}D6+${dice + 1}`;
  }
}


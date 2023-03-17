export const siz_sr = (siz) => {
  
  if(siz < 7) {
    return 3;
  } else if (siz < 15) {
    return 2;
  } else if (siz < 22){
    return 1;
  } else {
    return 0;
  }
}

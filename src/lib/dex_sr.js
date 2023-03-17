export const dex_sr = (dex) => {
  

  if(dex < 6) {
    return 5;
  } else if (dex < 9) {
    return 4;
  } else if (dex < 13){
    return 3;
  } else if (dex < 16){
    return 2;
  } else if (dex < 19){
    return 1;
  } else {
    return 0;
  }
}

export const max_enc = (str, con) => {

  if(str == '' || con == '' || isNaN(str) || isNaN(con)){
    return ''
  };

  if (con > str) {
		return parseFloat(str);
	}

	return (str + con) / 2.0;
};

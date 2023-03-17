export const max_enc = (str, con) => {
	if (con > str) {
		return parseFloat(str);
	}

	return (str + con) / 2.0;
};

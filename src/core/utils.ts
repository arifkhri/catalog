export const toStartCase = (str: string) => {
	const newstr: string[] = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		newstr[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return newstr.join(' ');
};

export const toIdrFormat = (value: string | number) => {
  return 'Rp. ' + value.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
}

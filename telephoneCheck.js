function telephoneCheck(str) {
	result = /^1?\ ?(\(\d{3}\-?\)|\d{3})\ ?\-?\d{3}\ ?\-?\d{4}$/g.test(str);
	
	return result;
}
telephoneCheck("1 555 555 5555");
var isDate = function (input) {
  //   write your code here
  if(input instanceof Date){
		return !isNan(input.getTime());
  }

  if(Array.isArray(input) || input == NULL){
	  return false;
  }

  const timestamp  = Date.parse(input);

  if(isNan(timestamp)){
	  return typeof(input) !== 'boolean' && !(isNan(Number(input)));
  }

	return true;
}
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
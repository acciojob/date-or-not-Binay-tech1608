var isDate = function (input) {
  //   write your code here
  if(input instanceof Date){
		return !isNaN(input.getTime());
  }

  if(Array.isArray(input) || input == null){
	  return false;
  }

  const timestamp  = Date.parse(input);

  if(isNan(timestamp)){
	  return typeof(input) !== 'boolean' && !(isNaN(Number(input)));
  }

	return true;
}
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
function telephoneCheck(str) {
  if (Number.isInteger(Number(str)) && str.length == 10) return true
  if (str.split('(').length != str.split(')').length) return false;
  if (str.startsWith('(')) {
    str = str.replace('(', '')
  }

  var array = str.replaceAll("(", " ")
    .replaceAll(")", " ")
    .replaceAll("-", " ")
    .replaceAll("  ", " ")
    .split(" ");
  // console.log(array)

  for (const element of array) {
    if (!Number.isInteger(Number(element))) {
      console.log(element)
      return false;
    }
  }

  if (array.length == 3 &&
    array[0].length == 3 &&
    array[1].length == 3 &&
    array[2].length == 4) {
    return true;
  } else if (array.length == 4 &&
    array[0] == '1' &&
    array[1].length == 3 &&
    array[2].length == 3 &&
    array[3].length == 4) {
    return true;
  } else {
    return false;
  }
}

console.log(telephoneCheck("(555)555-5555"));
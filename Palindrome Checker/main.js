function palindrome(str) {
  const a = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  str = kk(str)
  console.log(a)
  console.log(str)
  if (a !== str) {
    return false;
  }
  else {
    return true;
  }
}
function kk(z) {
  return z.split('').reverse().join('');
}


palindrome("eye_");
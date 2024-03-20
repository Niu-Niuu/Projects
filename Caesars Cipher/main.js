function rot13(str) {
  var b = ""
  var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i < str.length; i++) {
    var a = str[i]
    var result = a.match(/[A-Z]/);
    if (result != null) {
      for (var j = 0; j < 29; j++) {
        if (a == p[j]) {
          var t = p.indexOf(a)
          if (t > 12) {
            t = t - 13;
          }
          else {
            t = t + 13;
          }
        }
      }
      a = p[t]
    }
    else if (result == null) {
      a = a
    }
    var b = b + a;
  }
  console.log(b)
  str = b
  return str
}
// console.log(str.length)


// rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
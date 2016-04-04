function convert(path){
  if(!path){return undefined;}

  var identifierArray = path.split('.');
  identifierArray.shift();

  return '$.' + identifierArray.join('.');
}

function o(str){
  console.log(str);
}
/*
test cases:
  null path should return undefined
  */
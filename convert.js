function convert(path){
  if(!path){return undefined;}
  var identifierArray = path.split('.');
  
  var obj = this[identifierArray[0]];
  if(!obj){return undefined;}
  identifierArray.shift();
  identifierArray.join('');
  
  return '$.' + identifierArray.join('');
  
}

function o(str){
  console.log(str);
}
/*
test cases:
  null path should return undefined
  */
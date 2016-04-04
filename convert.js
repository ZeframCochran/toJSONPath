/*
 convert JSON  path to JSONPath exressions
 */
function convert(path){
  if(!path){return undefined;}

  var identifierArray = path.split('.');
  identifierArray.shift();

  return '$.' + identifierArray.join('.');
}

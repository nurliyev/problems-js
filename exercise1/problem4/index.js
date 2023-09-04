function makeTitleCase(str)
{
  let array1 = str.split(' ');
  let words = [];
    
  for(let x = 0; x < array1.length; x++){
      words.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return words.join(' ');
}

module.exports = makeTitleCase;

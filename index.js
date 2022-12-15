function justify(text, width) {
  let array = text.split(" ");
  let preparedDataArray = [];
  for(let i =0; i < array.length; i++){
    preparedDataArray.push({
      word : array[i],
      len : array[i].length 
    })
  }

  let lines = [];
  let counter = 0;
  let currLength = 0;
  let singleLine = [];

  for(let i = 0; i < preparedDataArray.length; i++){
    if(currLength + preparedDataArray[i].len > width - counter){
      lines.push(singleLine);
      singleLine = [];
      counter= 0;
      currLength = 0;
      i--;
    } else {
      counter++;
      currLength += preparedDataArray[i].len;
      singleLine.push(preparedDataArray[i].word)
    }
    if(i == preparedDataArray.length-1){
      lines.push(singleLine);
      singleLine = [];
      counter= 0;
      currLength = 0;
    }
  }

  let finalString = '';

  for(i=0; i < lines.length; i++){
    if(i == lines.length -1) {
      finalString += lines[i].join(" ");
    } else {
      let nrOfWords = lines[i].length;
      let normalSpaces = nrOfWords-1;
      let wordslength = lines[i].join("").length;
      let totalSpaces = width - wordslength;
      let spacesBetweenEachWord = [];

      // Fill with zero
      for(let j = 0; j < normalSpaces; j++){
        spacesBetweenEachWord.push(0);
      }

      // find the exact number of needed spaces
      for(let j = 0; j < totalSpaces; j++ ){
        spacesBetweenEachWord[j % normalSpaces]++;
      }

      // add n spaces and the 
      let newLine = '';
      for(let j = 0; j < nrOfWords; j++){
        if(j == nrOfWords -1){
          newLine+= lines[i][j] + '\n';
        } else {
          newLine+= lines[i][j] + ' '.repeat(spacesBetweenEachWord[j])
        }
      }
      finalString+=newLine;
    }
  }
  return finalString;
}

// Example to try the function
const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
const width = 50;

console.log(justify(LIPSUM, width))
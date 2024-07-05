// i th bit is set when it's index element is 1
// like in 4 (100) 2nd index is set

function isSet(num: number, index: number) {
  if ((num & (1 << index)) > 0) {
    console.log(`Set`);
  } else {
    console.log(`Not set`);
  }
}

isSet(4, 2);

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

function createTriangle(row) {
  let res = "";
  for (let i = 1; i < row; i++) {
    res += "#";
    console.log(res);
  }
}

createTriangle(8);

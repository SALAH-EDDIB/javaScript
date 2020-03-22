let number = [1, 2, 3, 4, 5];

function addnumber(arr, item) {
  arr.push(item);
  console.log("deleted ithem  :" + arr[0]);
  arr.shift();
  console.log(arr);
}
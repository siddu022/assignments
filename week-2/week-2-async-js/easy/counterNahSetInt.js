let count = 0;

function counter() {
  count++;
  console.log(count); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ....here 10 is printed because we are logging before if condition check.
  if (count < 10) {
    setTimeout(counter, 1000);
  } else {
    return;
  }
  //console.log(count); // 1, 2, 3, 4, 5, 6, 7, 8, 9  ....here 10 is not printed because we are logging after if condition check.
}

counter();

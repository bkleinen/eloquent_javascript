function yesNo() {
  return (0 ===(Math.floor(Math.random() * 2)))
}

   function nextInt(max) {
          return Math.floor(Math.random() * max)
      }

  for(i = 0;i<100;i++){
    console.log(nextInt(2))
  }

  let count = 0

    for(i = 0;i<10000;i++){
      if (yesNo()) count++;

    }
  console.log(count)

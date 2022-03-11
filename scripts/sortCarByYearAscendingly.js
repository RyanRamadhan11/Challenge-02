//Ryan Ramadhan || FSW 6

function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  //loop untuk mengakses setiap elemen array
  for (let i = 0; i < result.length; i++) {
    //loop untuk membandingkan elemen array
    for (let j = 0; j < result.length  - 1; j++) {
      //membandingkan dua elemen yang berdekatan
      //>  untuk mengurutkan dalam ascending order
      if (result[j].year > result[j + 1].year) {           
            let temp = result[j]                          
            result[j] = result[j + 1]                   
            result[j + 1] = temp
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}


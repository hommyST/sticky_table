const sortBtns = document.querySelectorAll('button.sort')
const sortState = {
  category: null,
  type: null, //asc = true desc = false
}

sortBtns.forEach(btn => {
  btn.addEventListener('click', sort)
})

function sort(ev) {
  let category = this.dataset.btn
  if (category === sortState.category) {
    sortState.type = !sortState.type
  } else {
    sortState.type = true
  }

  sortState.category = category

  // todo Сортировки date,platforms, score переделать!
 
  const newData = data.toSorted((a, b) => {
    let res = 0
    if (a[category] > b[category]) res = 1
    else if(a[category] < b[category]) res = -1
    
    return res
  })


  fillTable(newData)
}
const table = document.querySelector('table')

const data = []

const names = ['Katelynn','Larry','Michale','Rosalind','Leatha','Ruthie','Karlee','Roselyn','Henri','Linda','Luna','Gerard','Humberto','Eli','Sim','Anahi','Vincenzo','Donny','Gerald','Jason',]
const surnames = ['Lowe','Medhurst','Rau','Sporer','Mitchell','Stiedemann','Little','Stamm','Kassulke','Mueller','Oberbrunner','Hoppe','Kertzmann','Gulgowski','Toy','Bednar','Windler','Goldner','Hoppe','Kreiger',]
const hobies = ['sport', 'music', 'it', 'finance', 'videogame', 'tv shows', 'movies', 'beuty', 'cook', 'read', 'astrophisics', 'cars', 'boats', 'diving']

function fillData() {
  for (let i = 0; i < 50; i++) {
    let row = {}

    row.name = names[Math.floor(Math.random() * names.length)]
    row.surname = surnames[Math.floor(Math.random() * surnames.length)]
    row.age = Math.floor(Math.random() * 50 + 20)
    row.weight = Math.floor(Math.random() * 50 + 60)
    row.height = (Math.random() * 50 + 150).toFixed(2)

    let hobie = ''
    let totalHobies = Math.floor(Math.random() * 8 + 2)
    let copyHobies = hobies.slice()
    
    for (let i = 1; i <= totalHobies; i++) {
      let pickedIndex = Math.floor(Math.random() * copyHobies.length)
      hobie += copyHobies.splice(pickedIndex, 1)[0]
      if (i !== totalHobies) hobie += ', ' 
    }
    row.hobies = hobie
    row.fullname = row.name + ' ' + row.surname
    
    data.push(row)
  }
}

function fillTable() {
  const thead = document.createElement('thead')
  const tr = document.createElement('tr')

  const nameTh = document.createElement('th')
  const surnameTh = document.createElement('th')
  const ageTh = document.createElement('th')
  const weightTh = document.createElement('th')
  const heightTh = document.createElement('th')
  const hobieTh = document.createElement('th')
  const fullnameTh = document.createElement('th')

  nameTh.textContent = 'name'
  surnameTh.textContent = 'surname'
  ageTh.textContent = 'age'
  weightTh.textContent = 'weight'
  heightTh.textContent = 'height'
  hobieTh.textContent = 'hobie'
  fullnameTh.textContent = 'fullname'

  nameTh.classList.add('head-cell', 'name')
  surnameTh.classList.add('head-cell')
  ageTh.classList.add('head-cell')
  weightTh.classList.add('head-cell')
  heightTh.classList.add('head-cell')
  hobieTh.classList.add('head-cell')
  fullnameTh.classList.add('head-cell')

  tr.append(nameTh, surnameTh, ageTh, weightTh, heightTh, hobieTh, fullnameTh)
  thead.append(tr)

  const tbody = document.createElement('tbody')
  table.append(thead, tbody)


  data.forEach(row => {
    const tr = document.createElement('tr')

    const nameTd = document.createElement('td')
    const surnameTd = document.createElement('td')
    const ageTd = document.createElement('td')
    const weightTd = document.createElement('td')
    const heightTd = document.createElement('td')
    const hobieTd = document.createElement('td')
    const fullnameTd = document.createElement('td')

    nameTd.classList.add('cell', 'name')
    surnameTd.classList.add('cell')
    ageTd.classList.add('cell')
    weightTd.classList.add('cell')
    heightTd.classList.add('cell')
    hobieTd.classList.add('cell')
    fullnameTd.classList.add('cell')

    nameTd.dataset.cell = 'name'
    surnameTd.dataset.cell = 'surname'
    ageTd.dataset.cell = 'age'
    weightTd.dataset.cell = 'weight'
    heightTd.dataset.cell = 'height'
    hobieTd.dataset.cell = 'hobie'
    fullnameTd.dataset.cell = 'fullname'

    nameTd.textContent = row.name
    surnameTd.textContent = row.surname
    ageTd.textContent = row.age
    weightTd.textContent = row.weight
    heightTd.textContent = row.height
    hobieTd.textContent = row.hobies
    fullnameTd.textContent = row.fullname

    tr.append(nameTd, surnameTd, ageTd, weightTd, heightTd, hobieTd, fullnameTd)
    tbody.append(tr)
  })
}


fillData()
fillTable()
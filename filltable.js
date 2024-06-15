const table = document.querySelector('table')

let data = []

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

async function loadData() {
  data = await fetch('./data.json').then(res => res.json())
}

async function fillTable() {
  // fillHeadRow()
  await loadData()
  console.log(data);

  const tbody = document.createElement('tbody')
  table.append(tbody)


  data.forEach(row => {
    const tr = document.createElement('tr')

    const nameTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const devsTd = document.createElement('td')
    const platformsTd = document.createElement('td')
    const userScoreTd = document.createElement('td')

    nameTd.classList.add('cell', 'name', 'overflow_collapse')
    dateTd.classList.add('cell')
    devsTd.classList.add('cell')
    platformsTd.classList.add('cell')
    userScoreTd.classList.add('cell')

    nameTd.dataset.cell = 'name'
    dateTd.dataset.cell = 'date'
    devsTd.dataset.cell = 'devs'
    platformsTd.dataset.cell = 'platforms'
    userScoreTd.dataset.cell = 'userScore'

    nameTd.textContent = row.name
    dateTd.textContent = row.date
    devsTd.textContent = row.devs.join(', ')
    platformsTd.textContent = row.platforms.join(', ')
    userScoreTd.textContent = row.user_score

    nameTd.title = row.name

    tr.append(nameTd, dateTd, devsTd, platformsTd, userScoreTd)
    tbody.append(tr)
  })
}

function fillHeadRow() {
  const thead = document.createElement('thead')
  const tr = document.createElement('tr')

  const nameTh = document.createElement('th')
  const nameWrap = document.createElement('div')
  const surnameTh = document.createElement('th')
  const surnameWrap = document.createElement('div')
  const ageTh = document.createElement('th')
  const ageWrap = document.createElement('div')
  const weightTh = document.createElement('th')
  const weightWrap = document.createElement('div')
  const heightTh = document.createElement('th')
  const heightWrap = document.createElement('div')
  const hobieTh = document.createElement('th')
  const hobieWrap = document.createElement('div')
  const fullnameTh = document.createElement('th')
  const fullnameWrap = document.createElement('div')

  const sortImg = document.createElement('img')
  sortImg.src = './icons/up_down_arrow_white20.svg'
  
  nameWrap.textContent = 'name'
  surnameWrap.textContent = 'surname'
  ageWrap.textContent = 'age'
  weightWrap.textContent = 'weight'
  heightWrap.textContent = 'height'
  hobieWrap.textContent = 'hobie'
  fullnameWrap.textContent = 'fullname'
  
  nameWrap.append(sortImg.cloneNode())
  surnameWrap.append(sortImg.cloneNode())
  ageWrap.append(sortImg.cloneNode())
  weightWrap.append(sortImg.cloneNode())
  heightWrap.append(sortImg.cloneNode())
  hobieWrap.append(sortImg.cloneNode())
  fullnameWrap.append(sortImg.cloneNode())

  nameTh.classList.add('head-cell', 'name')
  surnameTh.classList.add('head-cell')
  ageTh.classList.add('head-cell')
  weightTh.classList.add('head-cell')
  heightTh.classList.add('head-cell')
  hobieTh.classList.add('head-cell')
  fullnameTh.classList.add('head-cell')

  nameTh.append(nameWrap)
  surnameTh.append(surnameWrap)
  ageTh.append(ageWrap)
  weightTh.append(weightWrap)
  heightTh.append(heightWrap)
  hobieTh.append(hobieWrap)
  fullnameTh.append(fullnameWrap)

  tr.append(nameTh, surnameTh, ageTh, weightTh, heightTh, hobieTh, fullnameTh)
  thead.append(tr)
  table.append(thead)
}

// fillData()
fillTable()
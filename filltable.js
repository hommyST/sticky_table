const table = document.querySelector('table tbody')

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
      console.log(hobie);
      if (i !== totalHobies) hobie += ', ' 
    }
    row.hobies = hobie
    row.fullname = row.name + ' ' + row.surname
    
    data.push(row)
  }
}

function fillTable() {
  data.forEach(row => {
    const tr = document.createElement('tr')
    for (const key in row) {
      const td = document.createElement('td')
      td.dataset.cell = key
      td.textContent = row[key]
      tr.append(td)
    }
    table.append(tr)
    // const tr = document.createElement('tr')

    // const nameTd = document.createElement('td')
    // const surnameTd = document.createElement('td')
    // const ageTd = document.createElement('td')
    // const weightTd = document.createElement('td')
    // const heightTd = document.createElement('td')
    // const hobieTd = document.createElement('td')
    // const fullnameTd = document.createElement('td')

    // nameTd.dataset.cell = 'name'
    // surnameTd.dataset.cell = 'surname'
    // ageTd.dataset.cell = 'age'
    // weightTd.dataset.cell = 'weight'
    // heightTd.dataset.cell = 'height'
    // hobieTd.dataset.cell = 'hobie'
    // fullnameTd.dataset.cell = 'fullname'

    // nameTd.textContent = row.name
    // surnameTd.textContent = row.surname
    // ageTd.textContent = row.age
    // weightTd.textContent = row.weight
    // heightTd.textContent = row.height
    // hobieTd.textContent = row.hobies
    // fullnameTd.textContent = row.fullname

    // tr.append(nameTd, surnameTd, ageTd, weightTd, heightTd, hobieTd, fullnameTd)
    // table.append(tr)
  })
}


fillData()
fillTable()
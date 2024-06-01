const dialog = document.querySelector('.more-info-dialog')
const closeBtn = dialog.querySelector('.close-btn')


table.addEventListener('click', ev => {
  let tag = ev.target.tagName
  if (!['TD', 'TR'].includes(tag)) return

  let tr = ev.target.closest('tr')

  let cells = [...tr.cells]

  cells.forEach(cell => {
    let title = cell.dataset.cell

    let span = dialog.querySelector(`[data-title="${title}"]`)

    span.textContent = cell.textContent
  })
  
  dialog.showModal()
  closeBtn.blur()
})

dialog.addEventListener('click', ev => {
  let tag = ev.target.tagName

  if (tag === 'DIALOG') dialog.close()
})

closeBtn.addEventListener('click', () => {
  dialog.close()
})
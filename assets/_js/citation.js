import ClipboardJS from 'clipboard'

const Citation = () => {
  let citePage = document.querySelector('.cite-page')

  if (!citePage) return

  clipboardInit()

  citePage
    .querySelector('.cite-page__label')
    .addEventListener(
      'click',
      () =>
        (citePage.querySelector('.cite-page__citation').style.display = 'block')
    )

  citePage
    .querySelector('.icon-icon_close')
    .addEventListener(
      'click',
      () =>
        (citePage.querySelector('.cite-page__citation').style.display = 'none')
    )
}

const clipboardInit = () => {
  let clipboard = new ClipboardJS('.cite-page .btn')

  clipboard.on('success', () => {
    let d = document.querySelector('.cite-page .btn')
    d.classList.add('tooltipped', 'tooltipped-n', 'tooltipped-no-delay')
  })
}

export default Citation

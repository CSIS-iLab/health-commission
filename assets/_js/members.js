let modal, overlay, close, container

const Members = () => {
  modal = document.querySelector('.modal')
  if (!modal) return
  overlay = document.querySelector('.modal-overlay')
  close = modal.querySelector('.icon-icon_close')
  container = modal.querySelector('.modal__container')

  close.addEventListener('click', exit)
  overlay.addEventListener('click', exit)

  document.querySelector('.member-directory').addEventListener('click', e => {
    if (e.target.classList.contains('btn')) {
      modal.style.display = 'block'
      overlay.style.display = 'block'
      container.scrollTop = 0
      let id = e.target.dataset.id
      fetch('/members.json')
        .then(resp => resp.json())
        .then(json => {
          let member = json.members.find(m => m.objectID === id)
          let memberHTML = compose(
            member,
            json.placeholder
          )
          container.innerHTML = memberHTML
        })
    }
  })
}

const compose = (member, placeholder) => {
  let image = `<img class="member__photo" onerror="this.src='${placeholder}'" src="${
    member.photo
  }" />`

  let display_name = `<div class="bio-name">${member.display_name}</div>`
  let title = `<div class="bio-title">${member.title}</div>`
  let paragraphs = member.bio
    .split(/\n/g)
    .map(p => `<p>${p}</p>`)
    .join('')
  let bio = `<div class="bio-long">${paragraphs}</div>`

  return `${image}<div class="member__text">${display_name}${title}${bio}</div>`
}

const exit = () => {
  modal.style.display = 'none'
  overlay.style.display = 'none'
}

export default Members

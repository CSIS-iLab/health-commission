import { Luminous, LuminousGallery } from 'luminous-lightbox'

const Lightbox = () => {
  const galleryOpts = {
    // Whether pressing the arrow keys should move to the next/previous slide.
    arrowNavigation: true
  }

  const luminousOpts = {
    // Prefix for generated element class names (e.g. `my-ns` will
    // result in classes such as `my-ns-lightbox`. Default `lum-`
    // prefixed classes will always be added as well.
    namespace: null,
    // Which attribute to pull the lightbox image source from.
    sourceAttribute: 'data-src',
    // Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.
    caption: e => {
      let parentNode = e.parentNode

      if (parentNode.classList.contains('image-picture')) {
        parentNode = e.parentNode.parentNode
      }

      if (parentNode.classList.contains('single-image')) {
        const caption = parentNode.querySelector('figcaption').innerHTML

        return `${caption}</div>`
      } else if (parentNode.classList.contains('image-group__images-single')) {
        const component = e.closest('.image-group')

        const i = Array.from(component.querySelectorAll('img')).indexOf(e)

        const description = component.querySelectorAll(
          '.image-group__caption-label'
        )[i].nextSibling

        const source = description.nextSibling

        const caption = `${description.textContent}${source.outerHTML}`

        return `${caption}`
      } else if (parentNode.classList.contains('image-gallery__image-single')) {
        const component = e.closest('.image-gallery')

        const i = Array.from(component.querySelectorAll('img')).indexOf(e)

        const caption = component.querySelectorAll(
          '.image-gallery__captions-single__text'
        )[i]

        caption
          .querySelector('span')
          .classList.remove('image-gallery__captions-single__text-source')

        return `${caption.innerHTML}`
      }
    },
    // The event to listen to on the _trigger_ element: triggers opening.
    openTrigger: 'click',
    // The event to listen to on the _lightbox_ element: triggers closing.
    closeTrigger: 'click',
    // Allow closing by pressing escape.
    closeWithEscape: true,
    // Automatically close when the page is scrolled.
    closeOnScroll: false,
    // Disable close button
    showCloseButton: true,
    // A node to append the lightbox element to.
    appendToNode: document.body,
    // A selector defining what to append the lightbox element to.
    // This will take precedence over `appendToNode`.
    appendToSelector: null,
    // If present (and a function), this will be called
    // whenever the lightbox is opened.
    onOpen: null,
    // If present (and a function), this will be called
    // whenever the lightbox is closed.
    onClose: null,
    // When true, adds the `imgix-fluid` class to the `img`
    // inside the lightbox. See https://github.com/imgix/imgix.js
    // for more information.
    includeImgixJSClass: false,
    // Add base styles to the page. See the "Theming"
    // section of README.md for more information.
    injectBaseStyles: true
  }

  const scSingleImages = Array.from(
    document.querySelectorAll('.single-image img')
  )
  const scGroups = Array.from(document.querySelectorAll('.image-group'))
  const scGalleries = Array.from(document.querySelectorAll('.image-gallery'))
  const single_images = Array.from(scSingleImages)
  const components = scGroups.concat(scGalleries)

  single_images.forEach(img => {
    img.style.cursor = 'zoom-in'
    new Luminous(img, luminousOpts)
  })

  components.forEach(component => {
    const component_images = Array.from(component.querySelectorAll('img'))

    component_images.forEach(img => {
      img.style.cursor = 'zoom-in'
    })

    new LuminousGallery(component_images, galleryOpts, luminousOpts)
  })
}

export default Lightbox

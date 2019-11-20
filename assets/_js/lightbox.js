import { Luminous } from 'luminous-lightbox'
import scroll from '@threespot/freeze-scroll'

const Lightbox = () => {
  const luminousOpts = {
    // Prefix for generated element class names (e.g. `my-ns` will
    // result in classes such as `my-ns-lightbox`. Default `lum-`
    // prefixed classes will always be added as well.
    namespace: null,
    // Which attribute to pull the lightbox image source from.
    sourceAttribute: 'data-src',
    // Captions can be a literal string, or a function that receives the Luminous instance's trigger element as an argument and returns a string. Supports HTML, so use caution when dealing with user input.
    caption: e => {
      let parentNode = e.closest('figure')

      const caption = parentNode.querySelector('figcaption').innerHTML

      return `${caption}</div>`
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
    onOpen: () => scroll.freeze(),
    // If present (and a function), this will be called
    // whenever the lightbox is closed.
    onClose: () => scroll.unfreeze(),
    // When true, adds the `imgix-fluid` class to the `img`
    // inside the lightbox. See https://github.com/imgix/imgix.js
    // for more information.
    includeImgixJSClass: false,
    // Add base styles to the page. See the "Theming"
    // section of README.md for more information.
    injectBaseStyles: true
  }

  const single_images = Array.from(
    document.querySelectorAll('.post__content figure img')
  )

  single_images.forEach(img => {
    img.style.cursor = 'zoom-in'
    new Luminous(img, luminousOpts)
  })
}

export default Lightbox

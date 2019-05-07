import Flickity from 'flickity'

const ImageGallery = () => {
  let galleries = Array.from(
    document.querySelectorAll('.image-gallery__images')
  )

  galleries.forEach(gallery => {
    let captions = Array.from(
      gallery.parentNode.querySelectorAll('.image-gallery__captions-single')
    )

    new Flickity(gallery, {
      cellAlign: 'center',
      pageDots: false,
      prevNextButtons: true,
      wrapAround: true,
      dragThreshold: 20,
      lazyLoad: 3,
      imagesLoaded: true,
      on: {
        ready: () => {
          captions[0].classList.add('active')
        },
        change: imageIndex => {
          captions.forEach((caption, captionIndex) => {
            if (imageIndex === captionIndex) {
              captions[captionIndex].classList.add('active')
            } else {
              captions[captionIndex].classList.remove('active')
            }
          })
        }
      }
    })
  })
}

export default ImageGallery

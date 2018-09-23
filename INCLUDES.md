# Includes Parameters
Documentation on parameters used for includes throughout the site. For information on includes see the [Jekyll docs](https://jekyllrb.com/docs/includes/).

## img-caption
Displays the caption and source for a photo.
`{%- include img-caption.html tag='p' desc=page.image_caption source=page.image_credit -%}`

- `tag`: The HTML tag to use. Default is `figcaption`
- `desc`: The image caption
- `source`: The image source (optional)

## page-header-background-img
Used by the `page-header` include to capture a `style` attribute for the page header's background image.
`{% include page-header-background-img.html image_url=page.image %}`

- `image_url`: The URL to the image to display

## post-block
`{% include post-block.html hide_excerpt=true show_image=true %}`

- `hide_excerpt`: Set to `true` to hide the post excerpt
- `show_image`: Set to `true` to show the post thumbnail
- `class`: Add additional classes to block. Useful for specifying a featured post
- `num_themes`: Leave blank to show all themes, otherwise set to number of themes to display. Parameter is passed to the `themes-list` include.


## themes-list
`{%- include themes-list.html num_themes='1' -%}`
- `num_themes`: Leave blank to show all themes, otherwise set to number of themes to display

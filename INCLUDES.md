# Includes Parameters
Documentation on parameters used for includes throughout the site. For information on includes see the [Jekyll docs](https://jekyllrb.com/docs/includes/).

## logo
Displays the blue SOS logo. This should be used at the end of the content of commentaries & spotlights.
`{% logo %}`

## site-nav
Displays a list of navigation menu items
`{%- include site-nav.html class="header__nav [or] footer__nav" location="inHeader [or] inFooter" -%}`

- `class`: Determines style differentiation between header and footer and home.
- `location`: References menu item attribute that determines whether the item should be rendered.

## social-share
Displays a list of social share options
`{%- include social-share.html class="site__header [or] post__header [or] post__footer" -%}`

- `class`: Determines style differentiation between post header and footer--or special functionality for site header on spotlights.


## post-block
`{% include post-block.html minimal=true  %}`

- `minimal`: Set to `true` to hide the post excerpt, photo, and authors
- `class`: Add additional classes to block. Useful for specifying a featured post. Default is null.

## spotlights
- `align`: Set to 'left' to align left. Set to 'right' to align right
- 'width': Set 'small' 'large' 'full' or 'max' width

## sc-single-image
`{% include single-image.html path="https://...jpg" caption="Two cats" credit="Likely Getty"  align="left" width="large" %}`

- `path`: Full image path
- `caption`: Image caption
- `credit`: Image credit
- `width`: Width for non-aligned images
- `align`: left or right

## sc-image-group
`{% include image-group.html height="500px" images=page.image_groups.max_two width="max" %}`

- `height`: height at which the group should appear on desktop
- `images`: key of images from spotlight front matter
- `width`: width for whole image group

Use front matter to specify url, caption, credit, and mode. Mode options are portrait or landscape. Mode defaults to square


## sc-image-gallery
`{% include sc-image-group.html height="500px" images=page.image_galleries.five width="full" %}`

- `height`: height at which the gallery should appear on desktop
- `images`: key of images from spotlight front matter
- `width`: width for whole image gallery

Use front matter to specify url, caption, credit, and mode. Mode options are portrait or landscape. Mode defaults to square

## sc-tooltip
`{% include sc-tooltip.html title="Lorem"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." %}`

- `title`: term to trigger tooltip
- `description`: description of term for popup

## sc-tooltip-video
`{% include sc-tooltip-video.html
name="How to read  AIS, VIIRS, and SAR data" url="https://player.vimeo.com/video/309369486" duration="2:09"
thumbnail="https://res.cloudinary.com/csisideaslab/image/upload/v1546463269/ocean/poling-headshot.jpg"
width="medium"
align="right"
 %}`
 - `title`: component header
 - `url`: video embed url
 - `thumbnail`: headshot for speaker

## background text scroll
`{% background_text_scroll image="https://aerospace.csis.org/wp-content/uploads/2018/04/ChinaLongMarchLaunch_cropped.jpg" %}
<div><strong>Content of the background_text_scroll goes here.</strong> This should be able to process HTML.</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{% endbackground_text_scroll %}`

- `image`: image featured in component
- content, or markup to display within component


##  explainer
`{% _explainer title="Polar Code" align="right" %}
<p><a href="http://www.imo.org/en/MediaCentre/HotTopics/polar/Documents/POLAR%20CODE%20TEXT%20AS%20ADOPTED.pdf" target="_blank" rel="noopener">The Polar Code</a> has been developed to supplement existing IMO instruments to increase the safety of ships’ operation and mitigate the impact on the people and environment in the remote, vulnerable, and potentially harsh polar waters. It covers the <a href="http://www.imo.org/en/mediacentre/hottopics/polar/pages/default.aspx" target="_blank" rel="noopener">full range of shipping-related matters</a> relevant to navigation in water surrounding the two poles – ship design, construction and equipment; operational and training concerns; search and rescue; and, equally important, the protection of the unique environment and eco-systems of the polar regions.</p>
{% end_explainer %}`

- `title`: explainer header
- `align`: left or right
- content, or markup to display within component


## timeline
{% include_relative scs/timeline.html  
  id="timeline-viirs"
  title="Title"
  description="Description"
  start_date="Jan 2013"
  end_date="Nov 2018"
  image="https://...jpg"
  steps=34
  size="large"
  %}

- `id`: Unique id required for scrollmagic.js library
- `start_date`: Date of first image
- `end_date`: Date of last image
- `image`: Full image path for sprite
- `height`: Height of each frame
- `width`: Width of sprite/images
- `steps`: Number of frames/steps for timeline
- `component_width`: Component width (large, max, or full)

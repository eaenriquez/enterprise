---
title: CSS Utilities
description: null
demo:
  embedded:
  - name: Main Example
    slug: example-index
---

## Important Notes

It's important to keep in mind that CSS utilities are meant to be small, reusable classes that can be quickly applied to HTML elements to achieve a specific style or behavior.

## Behavior Guidelines

CSS Utilities are pre-defined classes that you can add to HTML elements to quickly apply certain styles or behaviors to them. The CSS utilities listed provide a set of useful classes that can save a lot of time and effort when styling components or web pages. Below is a detailed documentation of each of the utilities:

### Text Utilities

`.text-center`
This utility centers the text horizontally within the parent element.

`.text-left`
This utility aligns the text to the left within the parent element.

`.text-right`
This utility aligns the text to the right within the parent element.

`.text-uppercase`
This utility sets the text to uppercase.

`.text-lowercase`
This utility sets the text to lowercase.

`.text-wrap`
This utility enables long words or text strings to break and wrap within a container as needed.

### Display Utilities

`.d-flex`
This utility sets the display property of an element to flex, making it a flex container.

`.d-block`
This utility sets the display property of an element to block.

`.d-inline`
This utility sets the display property of an element to inline.

`.d-i-block`
This utility sets the display property of an element to inline-block.

`.d-none`
This utility sets the display property of an element to none, making it hidden.

### Flexbox Utilities

`.align-items-center`
This utility aligns flex items along the vertical axis to the center.

`.justify-content-center`
This utility centers flex items along the horizontal axis.

`.justify-content-end` & `.justify-content-flex-end`
This utility will place the items at the end of the container.

`.justify-content-start` & `.justify-content-flex-start`
This utility will place the items at the start of the container.

`.justify-content-space-around`
This utility will provide spacing both before, between, and after the items.

`.justify-content-space-evenly`
This utility will provide equal spacing around the items.

`.flex-center`
This utility extends the `.d-flex`, `.align-items-center`, and `.justify-content-center` utilities to create a flex container that is centered both horizontally and vertically.

`.flex-wrap`
This utility defines that the flexible item will automatically wrap as needed.

`.flex-nowrap`
This utility ensures that flexible items remain unwrapped.

`.flex-wrap-reverse`
This utility instructs flexible items to wrap in reverse order when needed.

### Float Utilities

`.f-left`
This utility floats an element to the left.

`.f-right`
This utility floats an element to the right.

`.f-none`
This utility removes the float from an element.

### Styles Utilities

`.no-shadow`
This utility removes the shadow from an element.

### Padding and Margin Utilities

The padding and margin utilities provide classes for adding padding and margin to elements in increments of 0, up to a maximum of 80 pixels.

`.p-bottom-#`
This utility adds padding to the bottom of an element, where # is a number from 1 to 80 that specifies the amount of padding in pixels.

`.p-top-#`
This utility adds padding to the top of an element, where # is a number from 1 to 80 that specifies the amount of padding in pixels.

`.p-left-#`
This utility adds padding to the left of an element, where # is a number from 1 to 80 that specifies the amount of padding in pixels.

`.p-right-#`
This utility adds padding to the right of an element, where # is a number from 1 to 80 that specifies the amount of padding in pixels.

`.m-bottom-#`
This utility adds margin to the bottom of an element, where # is a number from 1 to 80 that specifies the amount of margin in pixels.

`.m-top-#`
This utility adds margin to the top of an element, where # is a number from 1 to 80 that specifies the amount of margin in pixels.

`.m-left-#`
This utility adds margin to the left of an element, where # is a number from 1 to 80 that specifies the amount of margin in pixels.

`.m-right-#`
This utility adds margin to the right of an element, where # is a number from 1 to 80 that specifies the amount of margin in pixels.

`.padding-x-#`
This utility adds padding to the left and right of an element, where # is a number from 1 to 80 that specifies the amount of padding in pixels.

`.padding-y-#`
This utility adds padding to the top and bottom of an element, where # is a number from 1 to 80 that specifies the amount of padding in pixels.

### Reset Utilities

`.unset-overflow`
This utility will reset the ellipsis to its default form.

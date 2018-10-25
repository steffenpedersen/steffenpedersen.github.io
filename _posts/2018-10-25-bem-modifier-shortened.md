---
title: BEM Modifier Shortened
category: sass
---

We could make modifiers like this:

```sass
.c-btn {
  &.--sm {
    height: 2em;
  }
}
```
In this way we could do this `<button class="c-btn --sm"></button>`

Instead of this:

```sass
.btn {
  &--sm {
    height: 2em;
  }
}
```
Which results in longer selectors `<button class="c-btn c-btn--sm"></button>`

It would make it easier to get an overview, when reading the outputted code. We just need not to make classes named `--modifier` outside of a block. That would also be weird.

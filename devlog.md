
---

### 2022.09.29
[Design, Coding]

Designed the icon for the extension.

Coded the basic functionality
- Recognized the select text action
- Create a pop up button exactly near by the selected text.
- Pop up a copy button after select (mouseup) event
- Able to clip the selected text
- Copy the text into the clipboard

<p align="center">
  <img src="./src/images/icon-128.png" width="128" height="128"/>
</p>

Spent so much time on debugging the mouseup event to get the selected text and display the pop up button on the exact position. It turns out the `x`, `y`, and other position properties getting from `.getBoundingClientRect()` is relative to the user screen, not the absolute position on the whole website. Adding the value from `window.scrollY` can help pointing on the exact spot.

---
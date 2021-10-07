# CSS

-   CSS stands for Cascading Style Sheets
-   Describes how HTML elements are displayed on the screen.
-   You can style elements directly, but it is much easier to use CSS rules

## CSS Element Selectors

_Example Syntax_

```
h1, h2 { 					// selector
	color : blue; 			//declaration (property : value)
	font-size : 12px;
}
```

**Selector** - indicates the HTML element that you want to style.

**Declaration** - style rule. Multiple Declarations are separated with semicolons.

## Comments

` /* Single/Multi Line Comment */`

## Selectors

Types of Selectors

-   `#` selector references an element by id. The id of an element should be unique to the page.
-   `.` selector references an element by class. All elements with this class will implement the CSS property.
-   `:hover` (element : hover) selector creates a different style when you mouse over an element
-   `:link` and `:visited` for visited/unvisited pages. **These selectors must come before the `:hover` definition**
-   `:focus` selectors select an element that has focus (has been clicked). Allowed on elements that have keyboard events or user inputs.

## Adding CSS Stylesheet to HTML

Use the `<link>` element with the `rel="stylesheet"` attribute.

```
<!DOCTYPE  html>
<html>
	<head>
		<link  rel="stylesheet"  href="style.css"/>
	</head>
...
```

## Specificity

How browsers decide which CSS property values to use if multiple classes reference these elements. A weight applied to a given CSS declaration. Determined by the number of each selector and type in the matching selector.

If all declarations have equal specificity we go with the last one that had been declared. Placing `!important` after the value in the declaration will give that rule a greater importance.

## Colors

Colors can be defined in multiple ways. Mainly:
_ **[RGB cubic-coordinate system](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation)**
_ **[HSL cylindrical-coordinate system](https://en.wikipedia.org/wiki/HSL_and_HSV)**
_ Hex
_ Keyword

Some other color properties

-   `color : pink;` Changes the text or foreground color.
-   `border-color : aliceblue;`
-   `background-color : azure;`

## Spacing

**Margin** - Space outside the border of the element.
**Padding** - Space inside the border of the element.

**![](https://lh4.googleusercontent.com/-nxInQuzWY7Qv3OIZR1WhMiTfOUBooFEElBEdPHTYGJVw0N5S1CViYe4pK8g6ciImod6cOCWN-6jKKDCgue_ziZ5Nd_ILrj9BZJGhOGFspzWVSSmXzBGyoLR0waLffYuYKUPRC_Sid4)**

## Font

-   `font-family` - changes the font of the text
-   `font-size`- changes the size of the font. Typically used in px, rem, em or % units
-   `font-weight` - how thick or thin characters are. the default value is `normal`. Other values include `bold`, `bolder`, `lighter`, `number`, `initial`, `inherit`

## Borders

-   `border-style` - specifies the kind of border we want to display. Values can be `dashed`, `dotted`, or `solid`
-   `border-width` - specifies the thickness of the border
-   `border-color` - specifies the color of the border
-   `border-radius` - specifies the roundness of the border.

## Cursor

The `cursor` property specifies the mouse cursor displayed when mousing over an element.

## Values

Relative Units

-   rem or em relative font size
-   px pixel of the viewing device
-   % of parent element

Negative Values

-   Are possible in CSS
-   Allows you to draw the borders of the element closer to the neighbor
-   typically seen with the z-index property

More info on [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

`calc()` Allows you to perform calculations. For example:

```
	width: calc(10px + 100px);
```

## Positioning

**Horizontal Centering**
_ Inline Elements - `text-align: center`
_ Block elements - `margin: 0 auto` (shorthand for setting the left and right margin properties to auto)

**Vertical Centering**
Inline Elements

```
padding-top: 30px;
padding-bottom: 30px
```

Centering Inline Elements using Flexbox

```
display: flex;
justify-content: center;
flex-direction: column;
height: 400px;
```

Centering from the parent element

```
.parent {
	position: relative;
}

.child {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
```

**[More information on Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**

## CSS Sticky Footer

Option #1 - Negative bottom margin using wrapper `<div>`.

Option # 2 `position: fixed`

```
.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: white;
		color: Black;
		text-align: center;
}
```

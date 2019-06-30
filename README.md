# ImageConcatenationTool
---------------------------------
## Image concatenation application by Javascript
---------------------------------
### Project contains
#### File name     |#### File content
-------------------|------------------
index.html         |File with HTML markup
main.js            |Script, what describes application functionality
style.css          |Application style file
images             |Folder with application background image and screenshots
-------------------|--------------------
### Built with
Sublime text - text editor for code, markup. Running in the MS Windows enviroment.
----------------------------------------
### Functionality
Interface contains two <input type="file"/> elements and one <canvas> element.
![alt interface](https://github.com/AlexShyshkov/ImageConcatenationTool/blob/master/images/screenshots/1.png)
Inputs accepts only images.
After the user selects an image from the first input ![alt first_input](https://github.com/AlexShyshkov/ImageConcatenationTool/blob/master/images/screenshots/3.png), 
it will be rendered on canvas ![alt rendering](https://github.com/AlexShyshkov/ImageConcatenationTool/blob/master/images/screenshots/4.png).
After the user selects an image from the second input ![alt second_input](https://github.com/AlexShyshkov/ImageConcatenationTool/blob/master/images/screenshots/5.png), it will be rendered on the same canvas to the right of the first image ![alt result](https://github.com/AlexShyshkov/ImageConcatenationTool/blob/master/images/screenshots/6.png).
Images rendered in scale, so two pictures will have the same height on canvas, but with the original aspect ratio.
User can select images in any order, but rendering order should stay the same: image from first input appears on canvas before image from the second input.

# SVG-LOGO-WISE

## Description
Our task was to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## Table of Contents:
- [Description](#Description)
- [Video Demo](#Walkthrough_Video_File)
- [Usage & Technical Details](#Usage)
- [Usage Instructions](#Usage_Instructions)
- [Testing](#Testing)
- [SVG Resources Used](#SVG_Resources_Used)
- [Credits](#Credits)
- [License](#License)
- [Author](#Author)

### Walkthrough_Video_File
- [Video Demo](https://drive.google.com/file/d/15rvslFZB9807FZFkwcwFUZ_WnMEYsVv5/view?usp=sharing)

### User_Story
```
- AS a freelance web developer
- I WANT to generate a simple logo for my projects
- SO THAT I don't have to pay a graphic designer
```
### Acceptance Criteria
```
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Directory Structure
```  
├── Assets/ *repo images*
├── examples/ 
    ├── example_circle.svg   
    ├── example_square.svg
    ├── example_triangle.svg    
├── lib/                
    ├── shapes.js       
    ├── shapes.test.js  
├── node_modules           
├── .gitignore          
├── index.js    
├── LICENSE
├── logo.svg  
├── package-lock.json
├── package.json
└── README.md         
```

## Usage 
### Technical Details
> - Jest for running the unit tests 
> - Inquirer for collecting input from the user
> - Node Package Manager

### Images
![index.js vscode preview](./Assets/index.js%20preview.png)
![SVG Green Circle Logo](./Assets/challenge%20logo.png)

### .gitignore 
> - dist
> - ds store

## Usage_Instructions
1. Open integrated terminal on index.js
2. Enter “node index.js” in the command line
3. The user will be presented with npm inquirer questions
4. State your choices to the options provided
5. Once completed a SVG file named “logo.svg” will be created


## Contributions
### SVG_Resources_Used
* [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)
* [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)
* [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
* [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)
* [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)
* [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)
* Youtube - Thomas OOP Demo

## Credits
N/A

## License
![alt text](https://img.shields.io/badge/License-_MIT-blue.svg)

## Author
@RhiannaWilson

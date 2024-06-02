# OOP-Challenge

## Description
Our task was to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## Walkthrough Video File

### User Story
- AS a freelance web developer
- I WANT to generate a simple logo for my projects
- SO THAT I don't have to pay a graphic designer
- Acceptance Criteria
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


## Usage 
### Technical Details
> Jest for running the unit tests 
> Inquirer for collecting input from the user
> Node Package Manager

### Directory Structure
.  
├── examples/           
├── lib/                
    ├── shapes.js       
    ├── shapes.test.js  
    └── more...        
├── .gitignore          
├── index.js           
├── package.json
└── README.md         

### .gitignore 
> dist
> ds store


## Testing
1. Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

2. The following example test should pass:

- - const shape = new Triangle();
- - shape.setColor("blue");
- - expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

You may need to add additional files in the lib folder for handling user input, writing to a file, etc. Writing tests for these additional files is optional.

#### SVG Resources Used
- Example SVG
- Scalable Vector Graphics (SVG)
- SVG tutorial
- Basic SVG shapes
- Text in SVG
- SVG VS Code extension
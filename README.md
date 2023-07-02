# React Calculator

This is a simple calculator built using React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator provides a user-friendly interface with a number display, buttons for inputting numbers and operations, and a result display. Currently hosted on http://calc.djbuchanan.net 

## Features

- Addition, subtraction, multiplication, and division operations
- Clear, clear everything, delete, and decimal functionality
- Positive/negative number toggle
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Getting Started

To get a local copy of this calculator up and running, follow these steps:

1. Clone the repository:

   `git clone https://github.com/your-username/react-calculator.git`

2. Navigate to the project directory:

    `cd react-calculator`

3. Install the dependencies:

    `npm install`

4. Start the development server:

    `npm start`

This will start the calculator application on http://localhost:3000.

## Usage

- Input numbers by clicking the respective number buttons.
- Perform arithmetic operations by clicking the corresponding operation buttons.
- Use the "C" button to clear the currently displayed value.
- Use the "CE" button to clear all values and start fresh.
- Use the delete button (←) to remove the last digit entered.
- Toggle positive/negative numbers using the ± button.
- Use the decimal button (.) to input decimal numbers.
- Press the "=" button to perform the selected operation and display the result.

## Known Bugs
- Currently does not support consecutive operations without using the "=" button.
    e.g. These exact inputs: '5 + 5 + 5 + 5 =' produce a result of 10 rather than 20.

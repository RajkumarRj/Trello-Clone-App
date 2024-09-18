# React + Vite

# Trello Board Clone

A React-based clone of Trello, providing a visual and intuitive interface for project management and task organization.

## Live Demo

Check out the live demo: [Trello Clone](https://66ea6538f9e7c3072d2cd38c--silly-selkie-4efc71.netlify.app/)

## Features

- Create and manage multiple boards
- Add, edit, and delete cards within boards
- Drag and drop functionality for cards
- Add labels, due dates, and tasks to cards
- Mark tasks as complete
- Persistent storage using browser's localStorage
- Responsive design for various screen sizes

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- localStorage for data persistence

## Project Structure

The project consists of several key components:

- `Dashboard`: The main component that renders the entire board view
- `Board`: Represents individual boards containing cards
- `Card`: Represents tasks or items within a board
- `CardInfo`: Detailed view and edit interface for a card
- `CustomInput`: Reusable input component
- `Dropdown`: Reusable dropdown component
- `Chip`: Component for rendering labels
- `Modal`: Reusable modal component for CardInfo

## Installation and Setup

To run this project locally:

1. Clone the repository:
   ```
   git clone [your-repository-url]
   ```

2. Navigate to the project directory:
   ```
   cd trello-board-clone
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Create a new board by clicking "Add Board"
- Add cards to a board using the "Add Card" button
- Click on a card to view and edit its details
- Drag and drop cards between boards
- Use the more options menu (••• icon) to delete boards or cards

## Data Persistence

The application uses the browser's localStorage to persist data. Board and card information is automatically saved and retrieved between sessions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your chosen license here]

## Acknowledgements

- [React](https://reactjs.org/)
- [react-feather](https://github.com/feathericons/react-feather) for icons
- [Netlify](https://www.netlify.com/) for hosting





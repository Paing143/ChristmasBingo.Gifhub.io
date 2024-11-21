/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    padding: 20px;
}

h1 {
    font-size: 3rem;
    color: #0066cc;
    margin-bottom: 20px;
}

.bingo-card {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.bingo-cell {
    font-size: 1.5rem;
    background-color: #ffcc00;
    color: white;
    border: 2px solid #0066cc;
    padding: 15px;
    border-radius: 10px;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.bingo-cell:hover {
    background-color: #ff6600;
    transform: scale(1.1);
}

.bingo-cell.selected {
    background-color: #28a745;
    color: white;
}

button {
    background-color: #0066cc;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #004c99;
}

import './styles.css';
import gnomeImg from './assets/gnome.png';

document.addEventListener('DOMContentLoaded', () => {
  const field = document.getElementById('game-field');
  
  // Создаём поле 4x4
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    field.appendChild(cell);
  }

  const cells = document.querySelectorAll('.cell');
  const gnome = document.createElement('img');
  gnome.src = gnomeImg;
  gnome.alt = 'Гном';
  gnome.classList.add('gnome');

  // Функция случайной клетки (не текущей)
  function getRandomCell(exclude = null) {
    let cell;
    do {
      cell = cells[Math.floor(Math.random() * cells.length)];
    } while (cell === exclude);
    return cell;
  }

  // Начальная позиция
  let currentCell = getRandomCell();
  currentCell.appendChild(gnome);

  // Перемещение каждые 1.5 сек
  setInterval(() => {
    const newCell = getRandomCell(currentCell);
    newCell.appendChild(gnome);  // Меняем родителя — гном "перемещается" автоматически
    currentCell = newCell;
  }, 1500);
});
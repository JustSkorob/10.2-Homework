import './styles.css';
import gnomeImg from './assets/gnome.png';

document.addEventListener('DOMContentLoaded', () => {
  const field = document.getElementById('game-field');

  // Создаём поле 4x4 (16 ячеек)
  const cells = Array.from({ length: 16 }, () => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    field.append(cell);
    return cell;
  });

  const gnome = document.createElement('img');
  gnome.src = gnomeImg;
  gnome.alt = 'Гном';
  gnome.classList.add('gnome');

  // Функция для получения случайной ячейки (исключая текущую)
  const getRandomCell = (exclude = null) => {
    let cell;
    do {
      cell = cells[Math.floor(Math.random() * cells.length)];
    } while (cell === exclude);
    return cell;
  };

  // Начальная позиция гнома
  let currentCell = getRandomCell();
  currentCell.append(gnome);

  const moveInterval = setInterval(() => {
    const newCell = getRandomCell(currentCell);
    newCell.append(gnome);
    currentCell = newCell;
  }, 1500);
  
  const stopButton = document.getElementById('stop-game');
  if (stopButton) {
    stopButton.addEventListener('click', () => {
      clearInterval(moveInterval);
      console.log('Игра остановлена, интервал очищен');
    });
  }

  window.addEventListener('beforeunload', () => {
    clearInterval(moveInterval);
  });
});

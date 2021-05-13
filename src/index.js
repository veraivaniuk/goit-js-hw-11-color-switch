import './styles.css';

const refs = {
    start: document.querySelector("button[data-action=start]"),
    stop: document.querySelector("button[data-action=stop]"),
    body: document.querySelector("body"),
}
console.dir(refs.start)

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let timerId = null;
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя 
//инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

const onStart = (min, max) => {
    refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(min, max)]}`;
    refs.body.style.backgroundImage = null;
    console.log(Date.now());
}

const callbackOnStart = () => {
    refs.start.disabled = true;
    console.log(timerId)
    timerId = setInterval(onStart, 1000, 0, (colors.length-1));
};

const callbackOnStop = () => {
    clearInterval(timerId);
    refs.start.disabled = false;
    refs.body.style.backgroundColor = null;
    refs.body.style.backgroundImage = `url('https://source.unsplash.com/WLUHO9A_xik/1600x900')`;
}

refs.start.addEventListener('click', callbackOnStart);
refs.stop.addEventListener("click", callbackOnStop);


// warning Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, 
//кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

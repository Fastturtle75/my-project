const quotes = [
    "«Чтобы понять рекурсию, нужно сначала понять рекурсию».",
    "«В мире есть 10 типов людей: те, кто понимают двоичную систему, и те, кто нет».",
    "«Программирование — это искусство превращения кофе в код».",
    "«Если код работает, не трогай его!»",
    "«Компьютер выполняет не то, что вы хотите, а то, что вы ему приказали».",
    "«Лучший код — это тот, который еще не написан»."
];

const quoteElement = document.getElementById('quote');
const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
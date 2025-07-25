/* 
-Copilot: Напиши код для JavaScript (для практики, я новичок) чтобы было условие if. Я новичок, хочу понять как это работает.
-Потом можно усложнить: Спасибо! Давай чуть-чуть по сложнее
-Думаю нужно благодарить: Вау! Ты супер ментор! Давай еще 
-Иногда нужно импровизировать 
*/

//----------------------------------------------------------------

function translateEmojis() {
  const text = document.getElementById("textInput").value;
  const output = document.getElementById("output");

  const emojiMap = {
    "счастлив": "😊",
    "грущу": "😢",
    "злюсь": "😠",
    "люблю": "❤️",
    "устал": "😴"
  };

  let result = text;

  for (const word in emojiMap) {
    const regex = new RegExp(word, "gi");
    result = result.replace(regex, emojiMap[word]);
  }

  output.textContent = result || "Ничего не найдено 😶";
}

//----------------------------------------------------------------

function checkEvenOdd() {
  const input = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Пожалуйста, введите число!";
    return;
  }

  const number = parseInt(input);

  if (isNaN(number)) {
    result.textContent = "Это не число!";
  } else if (number % 2 === 0) {
    result.textContent = `${number} - четное число`
  } else {
    result.textContent = `${number} - нечетное число`
  }
}

//----------------------------------------------------------------


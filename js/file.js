const selectedFile = document.getElementById("input").files[0];

'use strict';

let pythonBridge = require('python-bridge');

let python = pythonBridge();

// python.ex`import math`;
// python`math.sqrt(9)`.then(x => assert.equal(x, 3));

// let list = [3, 4, 2, 1];
// python`sorted(${list})`.then(x => assert.deepEqual(x, list.sort()));

// python.end();


function showFile(input) {
  let files = input.files;

  if (files.length == 2) {
    alert(`Файлы успешно загружены!`);
    let btn__bg = document.getElementById("input");
    btn__bg.style.backgroundColor = '#15857A';
    btn__bg.style.color = '#15857A';
    
  }
  else
  {
    alert(`Загрузите фотографии вместе!`);
    let btn__bg = document.getElementById("input");
    btn__bg.style.backgroundColor = '#C04277';
    btn__bg.style.color = '#C04277';
  }

}

python.end();
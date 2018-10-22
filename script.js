const fs = require('fs');
function question1Andrei() {
  fs.readFile('./data.txt', (err, data) => {
    console.time('santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === '(') {
        return (acc += 1);
      } else if (currentValue === ')') {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd('santa-time');
    console.log('floor: ', answer);
  });
}

// question1Andrei();

function question1() {
  fs.readFile('./data.txt', (err, data) => {
    console.time('funchallenge');
    const longString = data.toString('utf8');
    let stairs = 0;

    // Faster loop for iterating through a string
    for (var i = 0, len = longString.length; i < len; i++) {
      if (')' === longString[i]) {
        stairs--;
      } else {
        stairs++;
      }
    }
    console.timeEnd('funchallenge');
    console.log('Floor: ', stairs);
  });
}

// question1();

function question2() {
  fs.readFile('./data.txt', (err, data) => {
    console.time('funchallenge');
    const longString = data.toString('utf8');
    let stairs = 0;
    let notFound = true;

    // Andrei's answer was about 4x faster in execution time.
    for (var i = 0, len = longString.length; i < len; i++) {
      if (')' === longString[i]) {
        stairs--;
      } else {
        stairs++;
      }

      if (stairs === -1 && notFound) {
        // Add one because current index is never stored before break
        console.log('First basement at position ', i + 1);
        found = false;
        break;
      }
    }
    console.timeEnd('funchallenge');
  });
}

function question2Andrei() {
  fs.readFile('./data.txt', (err, data) => {
    console.time('q2time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some(currentItem => {
      if (currentItem === '(') {
        accumulator += 1;
      } else if (currentItem === ')') {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });
    console.timeEnd('q2time');
    console.log('basement entered at: ', counter);
  });
}

question2();
question2Andrei();

// Synchronously read files
// console.time('funchallenge');
// const file = fs.readFileSync('./data.txt');
// console.log('Sync', file.toString());
// console.timeEnd('funchallenge');

// APPEND
// fs.appendFile('./hello.txt', '\nThis is so cool!', err => {
//   console.log('Error: ', err);
// });

// WRITE
// fs.writeFile('buy.txt', 'Sad to see you go...', err => {
//   if (err) {
//     console.log('Error: ', err);
//   }
// });

// DELETE
// fs.unlink('./buy.txt', err => {
//   if (err) {
//     console.log('Error: ', err);
//   }
//   console.log('Inception');
// });

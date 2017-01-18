var names = [
  'Abby',
  'Alex',
  'Andy',
  'Charlie',
  'Drew',
  'Jose',
  'Maria',
  'Micah',
  'Sam',
  'Sasha'
];

var disability = {
  touch: [
    'has one arm',
    'has an arm injury',
    'is holding a baby'
  ],
  see: [
    'is blind',
    'has cataracts',
    'lost hearing in one ear'
  ],
  hear: [
    'is deaf',
    'has an ear infection',
    'lost hearing in one ear'
  ],
  speak: [
    'is non-verbal',
    'has laryngitis',
    'has a heavy accent',
    'lost her voice'
  ]
};

var physicalContext = [
  'at home',
  'in the wilderness',
  'on a bus',
  'in a car',
  'at the city center'
];

var disabilityFlat = Object.keys(disability).map(function(key) {
  return disability[key]
});

newMessage();
function newMessage() {
  function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  var message = getRandomItem(names) + ' ';
  message += getRandomItem(getRandomItem(disabilityFlat)); // Run getRandomItem twice
  message += ' ' + 'and is' + ' ';
  message += getRandomItem(physicalContext) + '.';
  return message;
  // document.getElementById('new-message').innerHTML = message;
}

document.body.onload = addElement;

function addElement() {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement('li');
  newDiv.className = 'stack__item';
  newDiv.innerHTML = newMessage(); //add the message to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById('main');
  document.body.insertBefore(newDiv, currentDiv);
}

var times = 100;
for(var i=0; i < times; i++) {
  addElement();
}
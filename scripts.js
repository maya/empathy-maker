// var visitor = prompt('What is your name');

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

var main = document.getElementById('main');

var times = 5;
for(var i=0; i < times; i++) {
  function createCards() {
    var card = document.createElement("div");
    var text = document.createTextNode(message);
    card.appendChild(text);
    document.body.appendChild(card);
  }
}

document.body.onload = addElement;

function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("message");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById('main');
  document.body.insertBefore(newDiv, currentDiv);
}

// var colors {
//   '#F8BBCF,'
//   '#C5C9E6,'
//   '#B6E3EB,'
//   '#DCECC8,'
//   '#B5E4FA,'
//   '#FBCBBD'
// }

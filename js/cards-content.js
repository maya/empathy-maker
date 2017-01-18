//Create 100 cards
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

var colors = [
  '#F8BBCF',
  '#C5C9E6',
  '#B6E3EB',
  '#DCECC8',
  '#B5E4FA',
  '#FBCBBD'
]

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
  var listItem = document.createElement('li');
  listItem.className = 'stack__item';
  var heading = document.createElement('h3');
  heading.className = 'stack__item-text';
  heading.innerHTML = newMessage(); //add the message to the newly created div.
  listItem.appendChild(heading);
  listItem.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // add the newly created element and its content into the DOM
  var list = document.getElementById('stack_yuda');
  // document.body.insertBefore(listItem, list);
  list.appendChild(listItem);
}

var times = 10;
for(var i=0; i < times; i++) {
  addElement();
}


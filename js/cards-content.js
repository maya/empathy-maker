var names = [
  'Alex',
  'Andy',
  'Ariel',
  'Carmen',
  'Charlie',
  'Drew',
  'Jesse',
  'Jude',
  'Micah',
  'Sam',
  'Sasha'
];

function makeDisability(options) {
  options.img = 'img/' + options.id + '.png';
  // if (options.type !== TOUCH || options.type !== BLARG) {
  //   throw Exception('type ' + options.type + ' is not valid!');
  // }
  return options;
}

// Physical disability senses/categories
var TOUCH = 'touch';
var SEE = 'see';
var HEAR = 'hear';
var SPEAK = 'speak';

var disabilities = [
  makeDisability({
    id: 'one-arm',
    type: TOUCH,
    description: 'has one arm'
  }),
  makeDisability({
    id: 'arm-injury',
    type: TOUCH,
    description: 'has an arm injury'
  }),
  makeDisability({
    id: 'holding-baby',
    type: TOUCH,
    description: 'is holding a baby'
  }),
  makeDisability({
    id: 'blind',
    type: SEE,
    description: 'is blind'
  }),
  makeDisability({
    id: 'cataracts',
    type: SEE,
    description: 'has cataracts'
  }),
  makeDisability({
    id: 'distracted-driver',
    type: SEE,
    description: 'is a distracted driver'
  }),
  makeDisability({
    id: 'deaf',
    type: HEAR,
    description: 'is deaf'
  }),
  makeDisability({
    id: 'ear-infection',
    type: HEAR,
    description: 'has an ear infection'
  }),
  makeDisability({
    id: 'non-verbal',
    type: SPEAK,
    description: 'is non-verbal'
  }),
  makeDisability({
    id: 'laryngitis',
    type: SPEAK,
    description: 'has laryngitis'
  }),
  makeDisability({
    id: 'heavy-accent',
    type: SPEAK,
    description: 'has a heavy accent'
  })
];

// var disability = {
//   touch: [
//     'has one arm',
//     'has an arm injury',
//     'is holding a baby'
//   ],
//   see: [
//     'is blind',
//     'has cataracts',
//     'is a distracted driver'
//   ],
//   hear: [
//     'is deaf',
//     'has an ear infection',
//     'lost hearing in one ear'
//   ],
//   speak: [
//     'is non-verbal',
//     'has laryngitis',
//     'has a heavy accent',
//     'lost her voice'
//   ]
// };

var physicalContext = [
  'at home',
  'in the wilderness',
  'on a bus',
  'in a car',
  'at the city center'
];

var colors = [
  '#F8BBCF',
  '#C5C9E6',
  '#B6E3EB',
  '#DCECC8',
  '#B5E4FA',
  '#FBCBBD'
]

function newMessage() {
  function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  var disability = getRandomItem(disabilities);
  var message = getRandomItem(names) + ' ';
  message += disability.description; // Run getRandomItem twice
  message += ' ' + 'and is' + ' ';
  message += getRandomItem(physicalContext) + '.';
  return {
    html: message,
    disability: disability
  };
}

document.body.onload = addElement;

function addElement() {
  // create a new div element
  // and give it some content
  var message = newMessage();
  var listItem = document.createElement('li');
  listItem.className = 'stack__item';
  var imageSrc = message.disability.img;
  var heading = document.createElement('h2');
  heading.className = 'stack__item-text';
  heading.innerHTML = message.html; // add the message to the newly created div.

  listItem.appendChild(heading);
  listItem.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  listItem.style.backgroundImage = 'url("' + imageSrc + '")';

  // add the newly created element and its content into the DOM
  var list = document.getElementById('stack_yuda');
  // document.body.insertBefore(listItem, list);
  list.appendChild(listItem);
}

// Create 100 cards
var times = 100;
for(var i=0; i < times; i++) {
  addElement();
}
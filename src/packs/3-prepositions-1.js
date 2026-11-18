// TITLE: Prepositions of Place · Part 1
// EYEBROW: Go Getter 2 · Grammar & Vocabulary · Предлоги места, часть 1
// SUB: 9 предлогов — on, above, below, in front of, behind, next to, near, far from, between. Карточки-картинки, правило и много заданий про комнату и дом.
// BOARD: Твои предлоги
// HOME: ../index.html
const META = { ls: "gg2-prep1" };
const P = [
 {
  "id": "on",
  "phrase": "on",
  "ru": "на (на столе, на стене)",
  "img": "pp-on"
 },
 {
  "id": "above",
  "phrase": "above",
  "ru": "над, выше",
  "img": "pp-above"
 },
 {
  "id": "below",
  "phrase": "below",
  "ru": "под, ниже",
  "img": "pp-below"
 },
 {
  "id": "front",
  "phrase": "in front of",
  "ru": "перед, впереди",
  "img": "pp-front"
 },
 {
  "id": "behind",
  "phrase": "behind",
  "ru": "за, позади",
  "img": "pp-behind"
 },
 {
  "id": "next",
  "phrase": "next to",
  "ru": "рядом с (вплотную)",
  "img": "pp-next"
 },
 {
  "id": "near",
  "phrase": "near",
  "ru": "около, недалеко от",
  "img": "pp-near"
 },
 {
  "id": "far",
  "phrase": "far from",
  "ru": "далеко от",
  "img": "pp-far"
 },
 {
  "id": "between",
  "phrase": "between",
  "ru": "между",
  "img": "pp-between"
 }
];
const DRILLS = [
 {
  "type": "listenpic",
  "title": "Послушай и найди",
  "short": "Слушаем",
  "instr": "Нажми 🔊, послушай предлог и нажми на нужную картинку. Где мячик?"
 },
 {
  "type": "pic",
  "title": "Где мячик?",
  "short": "Картинки",
  "instr": "Посмотри, где мячик, и выбери предлог."
 },
 {
  "type": "pick",
  "title": "Прочитай и найди",
  "short": "Читаем",
  "instr": "Прочитай предлог и нажми на нужную картинку."
 },
 {
  "type": "match",
  "title": "Найди пару",
  "short": "Пары",
  "instr": "Нажми на английский предлог, потом на перевод."
 },
 {
  "type": "listen",
  "title": "Послушай и переведи",
  "short": "На слух",
  "instr": "Нажми 🔊, послушай и выбери перевод."
 },
 {
  "type": "ru2en",
  "title": "Переведи на английский",
  "short": "RU → EN",
  "instr": "Прочитай по-русски и выбери английский предлог."
 },
 {
  "type": "en2ru",
  "title": "Переведи на русский",
  "short": "EN → RU",
  "instr": "Прочитай по-английски и выбери перевод."
 },
 {
  "type": "rule",
  "title": "Запомни хвостики!",
  "short": "Правило",
  "instr": "Некоторые предлоги — из двух слов. Маленькое слово в конце забывать нельзя.",
  "blocks": [
   {
    "h": "+ of / + to / + from",
    "lines": [
     [
      "in front *of* the sofa",
      "перед диваном"
     ],
     [
      "next *to* the bed",
      "рядом с кроватью"
     ],
     [
      "far *from* the school",
      "далеко от школы"
     ]
    ]
   },
   {
    "h": "Без хвостика!",
    "warn": true,
    "lines": [
     [
      "*near* the door ✓   near to the door ✗",
      "около двери"
     ],
     [
      "*behind* the door, *between* the chairs",
      "за дверью, между стульями"
     ],
     [
      "*on*, *above*, *below* the table",
      "на столе, над столом, под столом"
     ]
    ]
   },
   {
    "h": "near или next to?",
    "lines": [
     [
      "The lamp is *next to* the bed.",
      "Лампа рядом, вплотную к кровати."
     ],
     [
      "The shop is *near* my house.",
      "Магазин недалеко, в нескольких минутах."
     ]
    ]
   },
   {
    "h": "on или above?",
    "lines": [
     [
      "The book is *on* the table.",
      "Книга лежит на столе (касается)."
     ],
     [
      "The lamp is *above* the table.",
      "Лампа висит над столом (не касается)."
     ]
    ]
   }
  ]
 },
 {
  "type": "sort",
  "title": "Какой хвостик?",
  "short": "of/to/from",
  "instr": "Разложи предлоги: какое слово идёт после них?",
  "buckets": [
   "+ of",
   "+ to",
   "+ from",
   "без хвостика"
  ],
  "items": [
   {
    "id": "front",
    "img": "pp-front",
    "t": "in front …",
    "b": 0
   },
   {
    "id": "next",
    "img": "pp-next",
    "t": "next …",
    "b": 1
   },
   {
    "id": "far",
    "img": "pp-far",
    "t": "far …",
    "b": 2
   },
   {
    "id": "near",
    "img": "pp-near",
    "t": "near …",
    "b": 3
   },
   {
    "id": "behind",
    "img": "pp-behind",
    "t": "behind …",
    "b": 3
   },
   {
    "id": "between",
    "img": "pp-between",
    "t": "between …",
    "b": 3
   },
   {
    "id": "above",
    "img": "pp-above",
    "t": "above …",
    "b": 3
   },
   {
    "id": "below",
    "img": "pp-below",
    "t": "below …",
    "b": 3
   }
  ]
 },
 {
  "type": "gaps",
  "title": "Где мячик? Выбери",
  "short": "Мячик",
  "instr": "Посмотри на картинку и выбери предлог.",
  "items": [
   {
    "id": "on",
    "img": "pp-on",
    "t": "The ball is {{*on|below|behind}} the box."
   },
   {
    "id": "above",
    "img": "pp-above",
    "t": "The ball is {{*above|on|next to}} the box."
   },
   {
    "id": "below",
    "img": "pp-below",
    "t": "The ball is {{*below|above|on}} the table."
   },
   {
    "id": "front",
    "img": "pp-front",
    "t": "The ball is {{*in front of|behind|far from}} the box."
   },
   {
    "id": "behind",
    "img": "pp-behind",
    "t": "The ball is {{*behind|in front of|on}} the box."
   },
   {
    "id": "next",
    "img": "pp-next",
    "t": "The ball is {{*next to|far from|above}} the box."
   },
   {
    "id": "far",
    "img": "pp-far",
    "t": "The ball is {{*far from|next to|between}} the box."
   },
   {
    "id": "between",
    "img": "pp-between",
    "t": "The ball is {{*between|next to|behind}} the two boxes."
   }
  ]
 },
 {
  "type": "gaps",
  "title": "Моя комната",
  "short": "Комната",
  "instr": "Прочитай и выбери предлог.",
  "items": [
   {
    "id": "on",
    "t": "There is a big mirror {{*on|in|at}} the wall."
   },
   {
    "id": "next",
    "t": "The lamp is next {{*to|of|from}} my bed."
   },
   {
    "id": "far",
    "t": "My school is far {{*from|of|to}} my house. I go there by bus."
   },
   {
    "id": "front",
    "t": "The sofa is in front {{*of|to|from}} the fireplace."
   },
   {
    "id": "near",
    "t": "There is a park {{*near|near to|near of}} my house."
   },
   {
    "id": "between",
    "t": "The cupboard is {{*between|in front|on}} the fridge and the cooker."
   },
   {
    "id": "behind",
    "t": "The cat is hiding {{*behind|on|between}} the door."
   },
   {
    "id": "above",
    "t": "There is a picture {{*above|below|between}} the fireplace."
   },
   {
    "id": "below",
    "t": "My shoes are {{*below|above|behind}} the bed."
   }
  ]
 },
 {
  "type": "tf",
  "title": "Найди ошибку",
  "short": "Ошибки",
  "instr": "Правильно ли составлено предложение?",
  "items": [
   {
    "id": "front",
    "t": "The car is in front the house.",
    "ok": false,
    "fix": "The car is in front of the house.",
    "why": "in front OF"
   },
   {
    "id": "next",
    "t": "The chair is next to the desk.",
    "ok": true
   },
   {
    "id": "far",
    "t": "I live far from the city centre.",
    "ok": true
   },
   {
    "id": "near",
    "t": "The shop is near to my school.",
    "ok": false,
    "fix": "The shop is near my school.",
    "why": "near — без to"
   },
   {
    "id": "between",
    "t": "The sofa is between the lamp and the TV.",
    "ok": true
   },
   {
    "id": "on",
    "t": "The picture is on the wall.",
    "ok": true
   },
   {
    "id": "behind",
    "t": "The garden is behind of the house.",
    "ok": false,
    "fix": "The garden is behind the house.",
    "why": "behind — без of"
   },
   {
    "id": "above",
    "t": "The lamp is above the table.",
    "ok": true
   }
  ]
 },
 {
  "type": "gaps",
  "title": "Впиши предлог",
  "short": "Впиши",
  "instr": "Посмотри на картинку и впиши предлог целиком.",
  "items": [
   {
    "id": "on",
    "img": "pp-on",
    "t": "The ball is [[on]] the box."
   },
   {
    "id": "front",
    "img": "pp-front",
    "t": "The ball is [[in front of]] the box."
   },
   {
    "id": "behind",
    "img": "pp-behind",
    "t": "The ball is [[behind]] the box."
   },
   {
    "id": "next",
    "img": "pp-next",
    "t": "The ball is [[next to]] the box."
   },
   {
    "id": "far",
    "img": "pp-far",
    "t": "The ball is [[far from]] the box."
   },
   {
    "id": "between",
    "img": "pp-between",
    "t": "The ball is [[between]] the boxes."
   },
   {
    "id": "above",
    "img": "pp-above",
    "t": "The ball is [[above]] the box."
   },
   {
    "id": "below",
    "img": "pp-below",
    "t": "The ball is [[below/under]] the table."
   }
  ]
 },
 {
  "type": "order",
  "title": "Собери предложение",
  "short": "Фразы",
  "instr": "Нажимай на слова по порядку, чтобы получилось предложение.",
  "items": [
   {
    "id": "front",
    "img": "pp-front",
    "q": "Диван перед камином.",
    "s": "The sofa is in front of the fireplace."
   },
   {
    "id": "next",
    "img": "pp-next",
    "q": "Лампа рядом с кроватью.",
    "s": "The lamp is next to the bed."
   },
   {
    "id": "between",
    "img": "pp-between",
    "q": "Кошка между стульями.",
    "s": "The cat is between the chairs."
   },
   {
    "id": "on",
    "img": "pp-on",
    "q": "Зеркало на стене.",
    "s": "The mirror is on the wall."
   },
   {
    "id": "far",
    "img": "pp-far",
    "q": "Моя школа далеко от дома.",
    "s": "My school is far from my house."
   }
  ]
 },
 {
  "type": "translate",
  "title": "Переведи предложение",
  "short": "Перевод",
  "instr": "Напиши предложение по-английски. Главное — правильный предлог.",
  "items": [
   {
    "id": "front",
    "ru": "Машина перед домом.",
    "en": "The car is in front of the house.",
    "key": "in front of"
   },
   {
    "id": "behind",
    "ru": "Сад за домом.",
    "en": "The garden is behind the house.",
    "key": "behind"
   },
   {
    "id": "far",
    "ru": "Парк далеко от школы.",
    "en": "The park is far from the school.",
    "key": "far from"
   },
   {
    "id": "between",
    "ru": "Лампа между кроватью и шкафом.",
    "en": "The lamp is between the bed and the wardrobe.",
    "key": "between"
   },
   {
    "id": "near",
    "ru": "Магазин около моего дома.",
    "en": "The shop is near my house.",
    "key": "near"
   },
   {
    "id": "on",
    "ru": "Картина на стене.",
    "en": "The picture is on the wall.",
    "key": "on the wall"
   },
   {
    "id": "next",
    "ru": "Мой стул рядом со столом.",
    "en": "My chair is next to the desk.",
    "key": "next to"
   },
   {
    "id": "below",
    "ru": "Кот под столом.",
    "en": "The cat is below the table.",
    "key": "below|under"
   },
   {
    "id": "above",
    "ru": "Зеркало над камином.",
    "en": "The mirror is above the fireplace.",
    "key": "above"
   }
  ]
 },
 {
  "type": "letters",
  "title": "Собери слово из букв",
  "short": "Буквы",
  "instr": "Нажимай на буквы по порядку, чтобы получился предлог."
 },
 {
  "type": "write",
  "title": "Напиши по-английски",
  "short": "Пишем",
  "instr": "Посмотри на картинку и перевод и напиши предлог целиком. Забыл — вернись к карточкам."
 }
];

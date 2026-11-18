// TITLE: Prepositions of Place · Part 2
// EYEBROW: Go Getter 2 · Grammar & Vocabulary · Предлоги места, часть 2
// SUB: 8 предлогов — opposite, in the middle of, in the corner of, on the left, on the right, through, at the table, by the window. Карточки-картинки, правило и много заданий про комнату и дом.
// BOARD: Твои предлоги
// HOME: ../index.html
const META = { ls: "gg2-prep2" };
const P = [
 {
  "id": "opposite",
  "phrase": "opposite",
  "ru": "напротив",
  "img": "pp-opposite"
 },
 {
  "id": "middle",
  "spell": "middle",
  "phrase": "in the middle of",
  "ru": "в середине, посередине",
  "img": "pp-middle"
 },
 {
  "id": "corner",
  "spell": "corner",
  "phrase": "in the corner of",
  "ru": "в углу",
  "img": "pp-corner"
 },
 {
  "id": "left",
  "spell": "left",
  "phrase": "on the left",
  "ru": "слева",
  "img": "pp-left"
 },
 {
  "id": "right",
  "spell": "right",
  "phrase": "on the right",
  "ru": "справа",
  "img": "pp-right"
 },
 {
  "id": "through",
  "phrase": "through",
  "ru": "через, сквозь",
  "img": "pp-through"
 },
 {
  "id": "at",
  "phrase": "at the table",
  "ru": "за столом",
  "img": "pp-at"
 },
 {
  "id": "by",
  "phrase": "by the window",
  "ru": "у окна",
  "img": "pp-by"
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
  "title": "Запомни!",
  "short": "Правило",
  "instr": "Прочитай — здесь главные ловушки этих предлогов.",
  "blocks": [
   {
    "h": "+ of",
    "lines": [
     [
      "in the middle *of* the room",
      "посередине комнаты"
     ],
     [
      "in the corner *of* the room",
      "в углу комнаты"
     ]
    ]
   },
   {
    "h": "opposite — без of!",
    "warn": true,
    "lines": [
     [
      "*opposite* the shop ✓   opposite of the shop ✗",
      "напротив магазина"
     ]
    ]
   },
   {
    "h": "on the left / on the right",
    "lines": [
     [
      "The kitchen is *on the left*.",
      "Кухня слева."
     ],
     [
      "*in* the left ✗   *at* the right ✗",
      "только ON!"
     ]
    ]
   },
   {
    "h": "Устойчивые выражения",
    "lines": [
     [
      "*at* the table",
      "за столом"
     ],
     [
      "*by* the window",
      "у окна"
     ],
     [
      "*through* the window / the door",
      "через окно / дверь"
     ]
    ]
   }
  ]
 },
 {
  "type": "sort",
  "title": "С чего начинается?",
  "short": "in/on/…",
  "instr": "Разложи предлоги по первому слову.",
  "buckets": [
   "in the …",
   "on the …",
   "другие"
  ],
  "items": [
   {
    "id": "middle",
    "img": "pp-middle",
    "t": "… middle of",
    "b": 0
   },
   {
    "id": "corner",
    "img": "pp-corner",
    "t": "… corner of",
    "b": 0
   },
   {
    "id": "left",
    "img": "pp-left",
    "t": "… left",
    "b": 1
   },
   {
    "id": "right",
    "img": "pp-right",
    "t": "… right",
    "b": 1
   },
   {
    "id": "opposite",
    "img": "pp-opposite",
    "t": "opposite",
    "b": 2
   },
   {
    "id": "through",
    "img": "pp-through",
    "t": "through",
    "b": 2
   },
   {
    "id": "at",
    "img": "pp-at",
    "t": "at the table",
    "b": 2
   },
   {
    "id": "by",
    "img": "pp-by",
    "t": "by the window",
    "b": 2
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
    "id": "opposite",
    "img": "pp-opposite",
    "t": "The ball is {{*opposite|by|at}} the box — across the road."
   },
   {
    "id": "middle",
    "img": "pp-middle",
    "t": "The ball is {{*in the middle of|in the corner of|on the left}} the room."
   },
   {
    "id": "corner",
    "img": "pp-corner",
    "t": "The ball is {{*in the corner of|in the middle of|on the right}} the room."
   },
   {
    "id": "left",
    "img": "pp-left",
    "t": "The ball is {{*on the left|on the right|in the middle of}}."
   },
   {
    "id": "right",
    "img": "pp-right",
    "t": "The ball is {{*on the right|on the left|in the corner of}}."
   },
   {
    "id": "through",
    "img": "pp-through",
    "t": "The ball flies {{*through|at|by}} the window."
   },
   {
    "id": "at",
    "img": "pp-at",
    "t": "The boy is sitting {{*at|on|through}} the table."
   },
   {
    "id": "by",
    "img": "pp-by",
    "t": "The ball is {{*by|through|opposite}} the window."
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
    "id": "middle",
    "t": "There is a round table in the middle {{*of|from|to}} the living room."
   },
   {
    "id": "corner",
    "t": "My wardrobe is in the corner {{*of|to|from}} my bedroom."
   },
   {
    "id": "opposite",
    "t": "The TV is {{*opposite|opposite of|opposite to}} the sofa."
   },
   {
    "id": "at",
    "t": "We have dinner {{*at|on|by}} the table in the dining room."
   },
   {
    "id": "by",
    "t": "My desk is {{*by|through|at}} the window, so it's light."
   },
   {
    "id": "through",
    "t": "The sun shines {{*through|at|opposite}} the window."
   },
   {
    "id": "left",
    "t": "Go upstairs. My bedroom is {{*on the left|in the left|at the left}}."
   },
   {
    "id": "right",
    "t": "The bathroom is {{*on the right|in the right|at the right}}."
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
    "id": "opposite",
    "t": "The bank is opposite of the school.",
    "ok": false,
    "fix": "The bank is opposite the school.",
    "why": "opposite — без of"
   },
   {
    "id": "corner",
    "t": "The lamp is in the corner of the room.",
    "ok": true
   },
   {
    "id": "left",
    "t": "The kitchen is in the left.",
    "ok": false,
    "fix": "The kitchen is on the left.",
    "why": "ON the left / ON the right"
   },
   {
    "id": "at",
    "t": "Dad is sitting at the table.",
    "ok": true
   },
   {
    "id": "middle",
    "t": "The bed is in the middle the room.",
    "ok": false,
    "fix": "The bed is in the middle of the room.",
    "why": "in the middle OF"
   },
   {
    "id": "by",
    "t": "My bed is by the window.",
    "ok": true
   },
   {
    "id": "through",
    "t": "The cat jumps through the window.",
    "ok": true
   },
   {
    "id": "right",
    "t": "The bathroom is at the right.",
    "ok": false,
    "fix": "The bathroom is on the right.",
    "why": "ON the right"
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
    "id": "corner",
    "img": "pp-corner",
    "t": "The ball is [[in the corner of]] the room."
   },
   {
    "id": "middle",
    "img": "pp-middle",
    "t": "The ball is [[in the middle of]] the room."
   },
   {
    "id": "opposite",
    "img": "pp-opposite",
    "t": "The ball is [[opposite]] the box."
   },
   {
    "id": "by",
    "img": "pp-by",
    "t": "The ball is [[by]] the window."
   },
   {
    "id": "left",
    "img": "pp-left",
    "t": "The ball is [[on the left]]."
   },
   {
    "id": "right",
    "img": "pp-right",
    "t": "The ball is [[on the right]]."
   },
   {
    "id": "through",
    "img": "pp-through",
    "t": "The ball flies [[through]] the window."
   },
   {
    "id": "at",
    "img": "pp-at",
    "t": "The boy is sitting [[at]] the table."
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
    "id": "corner",
    "img": "pp-corner",
    "q": "Шкаф в углу комнаты.",
    "s": "The wardrobe is in the corner of the room."
   },
   {
    "id": "opposite",
    "img": "pp-opposite",
    "q": "Магазин напротив моего дома.",
    "s": "The shop is opposite my house."
   },
   {
    "id": "at",
    "img": "pp-at",
    "q": "Мы сидим за столом.",
    "s": "We are sitting at the table."
   },
   {
    "id": "by",
    "img": "pp-by",
    "q": "Мой стол у окна.",
    "s": "My desk is by the window."
   },
   {
    "id": "middle",
    "img": "pp-middle",
    "q": "Ковёр посередине комнаты.",
    "s": "The carpet is in the middle of the room."
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
    "id": "through",
    "ru": "Кошка смотрит через окно.",
    "en": "The cat is looking through the window.",
    "key": "through"
   },
   {
    "id": "at",
    "ru": "Бабушка сидит за столом.",
    "en": "Granny is sitting at the table.",
    "key": "at the table"
   },
   {
    "id": "by",
    "ru": "Кресло у окна.",
    "en": "The armchair is by the window.",
    "key": "by the window"
   },
   {
    "id": "left",
    "ru": "Кухня слева.",
    "en": "The kitchen is on the left.",
    "key": "on the left"
   },
   {
    "id": "right",
    "ru": "Ванная справа.",
    "en": "The bathroom is on the right.",
    "key": "on the right"
   },
   {
    "id": "middle",
    "ru": "Стол посередине комнаты.",
    "en": "The table is in the middle of the room.",
    "key": "in the middle of"
   },
   {
    "id": "opposite",
    "ru": "Школа напротив парка.",
    "en": "The school is opposite the park.",
    "key": "opposite"
   },
   {
    "id": "corner",
    "ru": "Шкаф в углу комнаты.",
    "en": "The wardrobe is in the corner of the room.",
    "key": "in the corner of"
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

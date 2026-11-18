// TITLE: Where Is It? Prepositions of Place
// EYEBROW: Go Getter 2 · Grammar & Vocabulary · Предлоги места
// SUB: 17 предлогов — in front of, behind, far from, through, at the table, by the window, on the left, on the right, in the middle of, between, near, on, next to, opposite, below, above, in the corner of. Карточки-картинки, правило и много заданий про комнату и дом.
// BOARD: Твои предлоги
// HOME: ../index.html
const META = { ls: "gg2-prepositions" };
const P = [
  { id: "on", phrase: "on", ru: "на (на столе, на стене)", img: "pp-on" },
  { id: "above", phrase: "above", ru: "над, выше", img: "pp-above" },
  { id: "below", phrase: "below", ru: "под, ниже", img: "pp-below" },
  { id: "front", phrase: "in front of", ru: "перед, впереди", img: "pp-front" },
  { id: "behind", phrase: "behind", ru: "за, позади", img: "pp-behind" },
  { id: "next", phrase: "next to", ru: "рядом с (вплотную)", img: "pp-next" },
  { id: "near", phrase: "near", ru: "около, недалеко от", img: "pp-near" },
  { id: "far", phrase: "far from", ru: "далеко от", img: "pp-far" },
  { id: "between", phrase: "between", ru: "между", img: "pp-between" },
  { id: "opposite", phrase: "opposite", ru: "напротив", img: "pp-opposite" },
  { id: "middle", phrase: "in the middle of", ru: "в середине, посередине", img: "pp-middle" },
  { id: "corner", phrase: "in the corner of", ru: "в углу", img: "pp-corner" },
  { id: "left", phrase: "on the left", ru: "слева", img: "pp-left" },
  { id: "right", phrase: "on the right", ru: "справа", img: "pp-right" },
  { id: "through", phrase: "through", ru: "через, сквозь", img: "pp-through" },
  { id: "at", phrase: "at the table", ru: "за столом", img: "pp-at" },
  { id: "by", phrase: "by the window", ru: "у окна", img: "pp-by" }
];
const DRILLS = [
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай предлог и нажми на нужную картинку. Где мячик?" },
  { type: "pic", title: "Где мячик?", short: "Картинки", instr: "Посмотри, где мячик, и выбери предлог." },
  { type: "pick", title: "Прочитай и найди", short: "Читаем", instr: "Прочитай предлог и нажми на нужную картинку." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английский предлог, потом на перевод." },
  { type: "listen", title: "Послушай и переведи", short: "На слух", instr: "Нажми 🔊, послушай и выбери перевод." },
  { type: "ru2en", title: "Переведи на английский", short: "RU → EN", instr: "Прочитай по-русски и выбери английский предлог." },
  { type: "en2ru", title: "Переведи на русский", short: "EN → RU", instr: "Прочитай по-английски и выбери перевод." },
  { type: "rule", title: "Запомни хвостики!", short: "Правило", instr: "Многие предлоги — из двух-трёх слов. Маленькое слово в конце забывать нельзя.",
    blocks: [
      { h: "+ of", lines: [
        ["in front *of* the sofa", "перед диваном"],
        ["in the middle *of* the room", "посередине комнаты"],
        ["in the corner *of* the room", "в углу комнаты"]
      ] },
      { h: "+ to / + from", lines: [
        ["next *to* the bed", "рядом с кроватью"],
        ["far *from* the school", "далеко от школы"]
      ] },
      { h: "Без хвостика!", warn: true, lines: [
        ["*opposite* the shop ✓   opposite of the shop ✗", "напротив магазина"],
        ["*near* the door ✓   near to the door ✗", "около двери"],
        ["*behind* the door, *between* the chairs", "за дверью, между стульями"]
      ] },
      { h: "near или next to?", lines: [
        ["The lamp is *next to* the bed.", "Лампа рядом, вплотную к кровати."],
        ["The shop is *near* my house.", "Магазин недалеко, в нескольких минутах."]
      ] },
      { h: "Устойчивые выражения", lines: [
        ["*at* the table", "за столом"],
        ["*by* the window", "у окна"],
        ["*on* the wall, *on* the left, *on* the right", "на стене, слева, справа"]
      ] }
    ] },
  { type: "sort", title: "Какой хвостик?", short: "of/to/from", instr: "Разложи предлоги: какое слово идёт после них?",
    buckets: ["+ of", "+ to", "+ from", "без хвостика"],
    items: [
      { id: "front", img: "pp-front", t: "in front …", b: 0 },
      { id: "middle", img: "pp-middle", t: "in the middle …", b: 0 },
      { id: "corner", img: "pp-corner", t: "in the corner …", b: 0 },
      { id: "next", img: "pp-next", t: "next …", b: 1 },
      { id: "far", img: "pp-far", t: "far …", b: 2 },
      { id: "opposite", img: "pp-opposite", t: "opposite …", b: 3 },
      { id: "near", img: "pp-near", t: "near …", b: 3 },
      { id: "behind", img: "pp-behind", t: "behind …", b: 3 },
      { id: "between", img: "pp-between", t: "between …", b: 3 },
      { id: "above", img: "pp-above", t: "above …", b: 3 }
    ] },
  { type: "gaps", title: "Где мячик? Выбери", short: "Мячик", instr: "Посмотри на картинку и выбери предлог.",
    items: [
      { id: "on", img: "pp-on", t: "The ball is {{*on|below|behind}} the box." },
      { id: "above", img: "pp-above", t: "The ball is {{*above|on|next to}} the box." },
      { id: "below", img: "pp-below", t: "The ball is {{*below|above|on}} the table." },
      { id: "front", img: "pp-front", t: "The ball is {{*in front of|behind|far from}} the box." },
      { id: "behind", img: "pp-behind", t: "The ball is {{*behind|in front of|on}} the box." },
      { id: "next", img: "pp-next", t: "The ball is {{*next to|far from|above}} the box." },
      { id: "far", img: "pp-far", t: "The ball is {{*far from|next to|between}} the box." },
      { id: "between", img: "pp-between", t: "The ball is {{*between|opposite|behind}} the two boxes." },
      { id: "opposite", img: "pp-opposite", t: "The ball is {{*opposite|on|below}} the box — across the road." },
      { id: "middle", img: "pp-middle", t: "The ball is {{*in the middle of|in the corner of|next to}} the room." },
      { id: "corner", img: "pp-corner", t: "The ball is {{*in the corner of|in the middle of|above}} the room." },
      { id: "left", img: "pp-left", t: "The ball is {{*on the left|on the right|above}}." },
      { id: "right", img: "pp-right", t: "The ball is {{*on the right|on the left|below}}." },
      { id: "through", img: "pp-through", t: "The ball flies {{*through|between|on}} the window." },
      { id: "at", img: "pp-at", t: "The boy is sitting {{*at|on|through}} the table." },
      { id: "by", img: "pp-by", t: "The ball is {{*by|through|in front}} the window." }
    ] },
  { type: "gaps", title: "Моя комната", short: "Комната", instr: "Прочитай и выбери предлог.",
    items: [
      { id: "on", t: "There is a big mirror {{*on|in|at}} the wall." },
      { id: "middle", t: "There is a round table in the middle {{*of|from|to}} the living room." },
      { id: "corner", t: "My wardrobe is in the corner {{*of|to|from}} my bedroom." },
      { id: "next", t: "The lamp is next {{*to|of|from}} my bed." },
      { id: "far", t: "My school is far {{*from|of|to}} my house. I go there by bus." },
      { id: "front", t: "The sofa is in front {{*of|to|from}} the fireplace." },
      { id: "opposite", t: "The TV is {{*opposite|opposite of|opposite to}} the sofa." },
      { id: "near", t: "There is a park {{*near|near to|near of}} my house." },
      { id: "between", t: "The cupboard is {{*between|in front|on}} the fridge and the cooker." },
      { id: "behind", t: "The cat is hiding {{*behind|on|through}} the door." },
      { id: "above", t: "There is a picture {{*above|below|between}} the fireplace." },
      { id: "below", t: "My shoes are {{*below|above|on the left}} the bed." },
      { id: "at", t: "We have dinner {{*at|on|by}} the table in the dining room." },
      { id: "by", t: "My desk is {{*by|through|between}} the window, so it's light." },
      { id: "through", t: "The sun shines {{*through|between|opposite}} the window." },
      { id: "left", t: "Go upstairs. My bedroom is {{*on the left|in the left|at the left}}." },
      { id: "right", t: "The bathroom is {{*on the right|in the right|at the right}}." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Правильно ли составлено предложение?",
    items: [
      { id: "front", t: "The car is in front the house.", ok: false, fix: "The car is in front of the house.", why: "in front OF" },
      { id: "next", t: "The chair is next to the desk.", ok: true },
      { id: "opposite", t: "The bank is opposite of the school.", ok: false, fix: "The bank is opposite the school.", why: "opposite — без of" },
      { id: "far", t: "I live far from the city centre.", ok: true },
      { id: "corner", t: "The lamp is in the corner of the room.", ok: true },
      { id: "left", t: "The kitchen is in the left.", ok: false, fix: "The kitchen is on the left.", why: "ON the left / ON the right" },
      { id: "near", t: "The shop is near to my school.", ok: false, fix: "The shop is near my school.", why: "near — без to" },
      { id: "at", t: "Dad is sitting at the table.", ok: true },
      { id: "middle", t: "The bed is in the middle the room.", ok: false, fix: "The bed is in the middle of the room.", why: "in the middle OF" },
      { id: "between", t: "The sofa is between the lamp and the TV.", ok: true }
    ] },
  { type: "gaps", title: "Впиши предлог", short: "Впиши", instr: "Посмотри на картинку и впиши предлог целиком.",
    items: [
      { id: "on", img: "pp-on", t: "The ball is [[on]] the box." },
      { id: "front", img: "pp-front", t: "The ball is [[in front of]] the box." },
      { id: "behind", img: "pp-behind", t: "The ball is [[behind]] the box." },
      { id: "next", img: "pp-next", t: "The ball is [[next to]] the box." },
      { id: "far", img: "pp-far", t: "The ball is [[far from]] the box." },
      { id: "between", img: "pp-between", t: "The ball is [[between]] the boxes." },
      { id: "above", img: "pp-above", t: "The ball is [[above]] the box." },
      { id: "below", img: "pp-below", t: "The ball is [[below/under]] the table." },
      { id: "corner", img: "pp-corner", t: "The ball is [[in the corner of]] the room." },
      { id: "middle", img: "pp-middle", t: "The ball is [[in the middle of]] the room." },
      { id: "opposite", img: "pp-opposite", t: "The ball is [[opposite]] the box." },
      { id: "by", img: "pp-by", t: "The ball is [[by]] the window." }
    ] },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "front", img: "pp-front", q: "Диван перед камином.", s: "The sofa is in front of the fireplace." },
      { id: "corner", img: "pp-corner", q: "Шкаф в углу комнаты.", s: "The wardrobe is in the corner of the room." },
      { id: "next", img: "pp-next", q: "Лампа рядом с кроватью.", s: "The lamp is next to the bed." },
      { id: "opposite", img: "pp-opposite", q: "Магазин напротив моего дома.", s: "The shop is opposite my house." },
      { id: "between", img: "pp-between", q: "Кошка между стульями.", s: "The cat is between the chairs." },
      { id: "on", img: "pp-on", q: "Зеркало на стене.", s: "The mirror is on the wall." },
      { id: "at", img: "pp-at", q: "Мы сидим за столом.", s: "We are sitting at the table." },
      { id: "far", img: "pp-far", q: "Моя школа далеко от дома.", s: "My school is far from my house." },
      { id: "by", img: "pp-by", q: "Мой стол у окна.", s: "My desk is by the window." },
      { id: "middle", img: "pp-middle", q: "Ковёр посередине комнаты.", s: "The carpet is in the middle of the room." }
    ] },
  { type: "translate", title: "Переведи предложение", short: "Перевод", instr: "Напиши предложение по-английски. Главное — правильный предлог.",
    items: [
      { id: "front", ru: "Машина перед домом.", en: "The car is in front of the house.", key: "in front of" },
      { id: "behind", ru: "Сад за домом.", en: "The garden is behind the house.", key: "behind" },
      { id: "far", ru: "Парк далеко от школы.", en: "The park is far from the school.", key: "far from" },
      { id: "through", ru: "Кошка смотрит через окно.", en: "The cat is looking through the window.", key: "through" },
      { id: "at", ru: "Бабушка сидит за столом.", en: "Granny is sitting at the table.", key: "at the table" },
      { id: "by", ru: "Кресло у окна.", en: "The armchair is by the window.", key: "by the window" },
      { id: "left", ru: "Кухня слева.", en: "The kitchen is on the left.", key: "on the left" },
      { id: "right", ru: "Ванная справа.", en: "The bathroom is on the right.", key: "on the right" },
      { id: "middle", ru: "Стол посередине комнаты.", en: "The table is in the middle of the room.", key: "in the middle of" },
      { id: "between", ru: "Лампа между кроватью и шкафом.", en: "The lamp is between the bed and the wardrobe.", key: "between" },
      { id: "near", ru: "Магазин около моего дома.", en: "The shop is near my house.", key: "near" },
      { id: "on", ru: "Картина на стене.", en: "The picture is on the wall.", key: "on the wall" },
      { id: "next", ru: "Мой стул рядом со столом.", en: "My chair is next to the desk.", key: "next to" },
      { id: "opposite", ru: "Школа напротив парка.", en: "The school is opposite the park.", key: "opposite" },
      { id: "below", ru: "Кот под столом.", en: "The cat is below the table.", key: "below|under" },
      { id: "corner", ru: "Шкаф в углу комнаты.", en: "The wardrobe is in the corner of the room.", key: "in the corner of" },
      { id: "above", ru: "Зеркало над камином.", en: "The mirror is above the fireplace.", key: "above" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получился предлог." },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и перевод и напиши предлог целиком. Забыл — вернись к карточкам." }
];

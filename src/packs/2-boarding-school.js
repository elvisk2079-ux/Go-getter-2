// TITLE: A Day at a Boarding School
// EYEBROW: Go Getter 2 · Reading · Boarding school · Слова из текста
// SUB: 20 слов и фраз из текста про британскую школу-пансион — boarding school, exciting, magic, describe, wake up at, the bell rings, never late… Карточки, чтение, потом много заданий с переводом и предложениями.
// BOARD: Твои слова из текста
// HOME: ../index.html
const META = { ls: "gg2-boarding" };
const P = [
  { id: "films", phrase: "in films", ru: "в фильмах", img: "clapper-board" },
  { id: "boarding", phrase: "boarding school", ru: "школа-пансион (ученики там живут)", img: "school bed" },
  { id: "exciting", phrase: "exciting", ru: "захватывающий, очень интересный", img: "star-struck" },
  { id: "place", phrase: "place", ru: "место", img: "round-pushpin" },
  { id: "often", phrase: "often", ru: "часто", img: "repeat-button" },
  { id: "magic", phrase: "magic", ru: "волшебство, магия", img: "magic-wand" },
  { id: "monster", phrase: "monster", ru: "чудовище, монстр", img: "ogre" },
  { id: "real", phrase: "real", ru: "настоящий, реальный", img: "white-heavy-check-mark" },
  { id: "like", phrase: "What is it like?", ru: "Какой он? Каково там?", img: "thinking-face", say: "What is it like?" },
  { id: "thirteen", phrase: "thirteen-year-old", ru: "тринадцатилетний", img: "keycap-1 keycap-3" },
  { id: "describe", phrase: "describe", ru: "описывать", img: "speaking-head" },
  { id: "typical", phrase: "a typical day", ru: "обычный (типичный) день", img: "tear-off-calendar" },
  { id: "wakeup", phrase: "wake up at", ru: "просыпаться в (время)", img: "alarm-clock" },
  { id: "breakfast", phrase: "have breakfast", ru: "завтракать", img: "bowl-with-spoon" },
  { id: "canteen", phrase: "canteen", ru: "столовая", img: "fork-and-knife-with-plate" },
  { id: "bell", phrase: "the bell rings", ru: "звенит звонок", img: "bell" },
  { id: "assembly", phrase: "assembly", ru: "общее собрание, линейка", img: "busts-in-silhouette" },
  { id: "hall", phrase: "hall", ru: "актовый зал", img: "microphone" },
  { id: "great", phrase: "the great thing about", ru: "самое классное в…", img: "thumbs-up glowing-star", spell: "great" },
  { id: "late", phrase: "never late", ru: "никогда не опаздываем", img: "person-running !no" }
];
const DRILLS = [
  { type: "rule", title: "Читаем правильно", short: "Чтение", instr: "Эти слова из текста часто читают неправильно. Прочитай и послушай их в карточках.",
    blocks: [
      { h: "exciting [ɪkˈsaɪtɪŋ] — «иксАйтинг»", lines: [
        ["ex*ci*ting", "c перед i = «с», i = «ай»"],
        ["ex*ci*ting, ex*ci*ted", "так же: «иксАйтид»"]
      ] },
      { h: "Ещё ловушки", lines: [
        ["of*t*en [ˈɒfn]", "«офн» — t не читается"],
        ["desc*ri*be [dɪˈskraɪb]", "«дискрАйб» — i = «ай»"],
        ["t*y*pical [ˈtɪpɪkl]", "«тИпикл» — y = «и»"],
        ["thir*tee*n [θɜːˈtiːn]", "ударение в конце: «сё-тИ:н»"],
        ["ma*g*ic [ˈmædʒɪk]", "«мЭджик» — g перед i = «дж»"],
        ["h*all*, *a*ssembly", "«хол», «эсЭмбли»"]
      ] },
      { h: "Полезные фразы из текста", lines: [
        ["*What is it like?*", "Какой он? Каково там? (like здесь — не «нравиться»!)"],
        ["*The great thing about* school is…", "Самое классное в школе — это…"],
        ["We *wake up at* 7.00.", "Мы просыпаемся в 7:00."],
        ["We're *never late*.", "Мы никогда не опаздываем."]
      ] }
    ] },
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что это?", short: "Картинки", instr: "Посмотри на картинку и выбери слово или фразу." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и переведи", short: "На слух", instr: "Нажми 🔊, послушай и выбери перевод." },
  { type: "ru2en", title: "Переведи на английский", short: "RU → EN", instr: "Прочитай по-русски и выбери английский вариант." },
  { type: "en2ru", title: "Переведи на русский", short: "EN → RU", instr: "Прочитай по-английски и выбери перевод." },
  { type: "gaps", title: "Утро в пансионе", short: "Текст", keepOrder: true, layout: "text", instr: "Прочитай рассказ Тома о его школе и выбери слова.",
    items: [
      { id: "films", t: "Tom loves Harry Potter. {{*In films|In canteens|In halls}}, schools are full of {{*magic|bells|breakfast#magic}} and {{*monsters|places|days#monster}}." },
      { id: "boarding", t: "Tom is twelve, and he goes to a {{*boarding school|bell|canteen}} in England. He lives there from Monday to Friday." },
      { id: "real", t: "What is a {{*real|late|often}} boarding school {{*like|describe|wake#like}}? Tom {{*describes|rings|wakes#describe}} his day." },
      { id: "wakeup", t: "\"We {{*wake up|ring|describe#wakeup}} at seven o'clock. Then we {{*have breakfast|have assembly|have magic#breakfast}} in the {{*canteen|hall|bell#canteen}}." },
      { id: "bell", t: "At half past eight, the {{*bell rings|monster rings|canteen rings}} for {{*assembly|breakfast|magic#assembly}} in the {{*hall|place|film#hall}}." },
      { id: "great", t: "The {{*great thing about|exciting place in|typical day of}} my school is that we're {{*never late|often late|real late#late}} — the classrooms are next to our bedrooms!\"" }
    ] },
  { type: "gaps", title: "Выбери слово", short: "Слова", instr: "Прочитай предложение и выбери подходящее слово.",
    items: [
      { id: "exciting", img: "star-struck", t: "I love this game! It's very {{*exciting|late|real}}." },
      { id: "place", img: "round-pushpin", t: "The library is my favourite {{*place|bell|monster}} in the school." },
      { id: "often", img: "repeat-button", t: "I {{*often|never|real}} go to the cinema — every Saturday!" },
      { id: "magic", img: "magic-wand", t: "Harry Potter can do {{*magic|breakfast|assembly}}." },
      { id: "monster", img: "ogre", t: "There is a big green {{*monster|canteen|place}} in this film." },
      { id: "real", img: "white-heavy-check-mark", t: "Is this a {{*real|typical|often}} dinosaur? — No, it's a toy!" },
      { id: "like", img: "thinking-face", t: "What is your new school {{*like|describe|real}}? — It's big and modern." },
      { id: "thirteen", img: "keycap-1 keycap-3", t: "My brother is thirteen. He's a {{*thirteen-year-old|thirteen-years-old|thirteen year}} boy." },
      { id: "describe", img: "speaking-head", t: "Can you {{*describe|wake|ring}} your bedroom? — It's small, with a blue bed." },
      { id: "typical", img: "tear-off-calendar", t: "On a {{*typical day|real day|exciting day}}, I go to school, do my homework and play computer games." },
      { id: "wakeup", img: "alarm-clock", t: "I {{*wake up at|wake up in|wake up on}} seven o'clock." },
      { id: "breakfast", img: "bowl-with-spoon", t: "I {{*have breakfast|have assembly|have magic}} at half past seven — cornflakes and milk." },
      { id: "canteen", img: "fork-and-knife-with-plate", t: "We have lunch in the school {{*canteen|hall|bell}}." },
      { id: "bell", img: "bell", t: "Listen! The {{*bell rings|monster rings|canteen rings}}. The lesson starts." },
      { id: "assembly", img: "busts-in-silhouette", t: "All the students meet in the hall for {{*assembly|breakfast|magic}} on Monday morning." },
      { id: "hall", img: "microphone", t: "The school concert is in the {{*hall|canteen|bell}}." },
      { id: "great", img: "thumbs-up glowing-star", t: "The {{*great thing about|real thing|typical thing}} summer is that there's no school!" },
      { id: "late", img: "person-running !no", t: "I always get up early. I'm {{*never late|often late|real late}} for school." }
    ] },
  { type: "tf", title: "Верно или нет?", short: "Верно?", instr: "Вспомни текст про школу-пансион. Верно или нет?",
    items: [
      { id: "films", t: "In films, boarding schools are boring places.", ok: false, fix: "In films, boarding schools are exciting places." },
      { id: "magic", t: "In films, boarding schools often have magic or monsters.", ok: true },
      { id: "thirteen", t: "Laura is thirteen years old.", ok: true },
      { id: "describe", t: "Laura describes a typical day at her school.", ok: true },
      { id: "wakeup", t: "The students wake up at 8.00.", ok: false, fix: "The students wake up at 6.30." },
      { id: "breakfast", t: "They have breakfast in the hall.", ok: false, fix: "They have breakfast in the school canteen." },
      { id: "bell", t: "At 8.00, the bell rings for assembly.", ok: true },
      { id: "late", t: "At a boarding school, the students are often late.", ok: false, fix: "They are never late for school." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Впиши слово или фразу. Подсказка — перевод в скобках.",
    items: [
      { id: "boarding", img: "school bed", t: "Laura lives at her school. It's a [[boarding school]]. (школа-пансион)" },
      { id: "exciting", img: "star-struck", t: "The film is very [[exciting]]! (захватывающий)" },
      { id: "often", img: "repeat-button", t: "We [[often]] play football after school. (часто)" },
      { id: "magic", img: "magic-wand", t: "Do you believe in [[magic]]? (волшебство)" },
      { id: "describe", img: "speaking-head", t: "[[Describe]] your best friend, please. (опиши)" },
      { id: "wakeup", img: "alarm-clock", t: "What time do you [[wake up]]? (просыпаться)" },
      { id: "breakfast", img: "bowl-with-spoon", t: "We [[have breakfast]] at 7.15. (завтракаем)" },
      { id: "canteen", img: "fork-and-knife-with-plate", t: "The [[canteen]] is on the ground floor. (столовая)" },
      { id: "bell", img: "bell", t: "The [[bell]] rings at 8.30. (звонок)" },
      { id: "assembly", img: "busts-in-silhouette", t: "We have [[assembly]] in the hall. (линейка)" },
      { id: "late", img: "person-running !no", t: "Don't be [[late]] for school! (опаздывать)" },
      { id: "real", img: "white-heavy-check-mark", t: "Is it a [[real]] monster? (настоящий)" }
    ] },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "wakeup", img: "alarm-clock", q: "Мы просыпаемся в 6:30.", s: "We wake up at 6.30." },
      { id: "breakfast", img: "bowl-with-spoon", q: "Мы завтракаем в школьной столовой.", s: "We have breakfast in the school canteen." },
      { id: "bell", img: "bell", q: "Звонок звенит в 8:00.", s: "The bell rings at 8.00." },
      { id: "like", img: "thinking-face", q: "Какая твоя школа?", s: "What is your school like?" },
      { id: "late", img: "person-running !no", q: "Мы никогда не опаздываем в школу.", s: "We're never late for school." },
      { id: "great", img: "thumbs-up glowing-star", q: "Самое классное в моей школе — бассейн.", s: "The great thing about my school is the pool." },
      { id: "exciting", img: "star-struck", q: "Школы-пансионы — интересные места.", s: "Boarding schools are exciting places." },
      { id: "describe", img: "speaking-head", q: "Лора описывает свой день.", s: "Laura describes her day." },
      { id: "often", img: "ogre", q: "В фильмах часто есть монстры.", s: "Films often have monsters." }
    ] },
  { type: "translate", title: "Переведи предложение", short: "Перевод", instr: "Напиши предложение по-английски. Главное — правильная фраза из текста.",
    items: [
      { id: "wakeup", ru: "Я просыпаюсь в семь часов.", en: "I wake up at seven o'clock.", key: "wake up at" },
      { id: "breakfast", ru: "Мы завтракаем на кухне.", en: "We have breakfast in the kitchen.", key: "have breakfast" },
      { id: "late", ru: "Я никогда не опаздываю.", en: "I'm never late.", key: "never late" },
      { id: "like", ru: "Какой твой учитель?", en: "What is your teacher like?", key: "what is your teacher like|what's your teacher like" },
      { id: "exciting", ru: "Этот фильм очень захватывающий.", en: "This film is very exciting.", key: "exciting" },
      { id: "often", ru: "Я часто читаю книги.", en: "I often read books.", key: "often" },
      { id: "bell", ru: "Звенит звонок.", en: "The bell rings.", key: "bell (rings|is ringing)" },
      { id: "boarding", ru: "Моя сестра учится в школе-пансионе.", en: "My sister goes to a boarding school.", key: "boarding school" },
      { id: "great", ru: "Самое классное в лете — каникулы.", en: "The great thing about summer is the holidays.", key: "great thing about" },
      { id: "thirteen", ru: "Лора — тринадцатилетняя девочка.", en: "Laura is a thirteen-year-old girl.", key: "thirteen-year-old" },
      { id: "assembly", ru: "У нас линейка в актовом зале.", en: "We have assembly in the hall.", key: "assembly" },
      { id: "describe", ru: "Опиши свою комнату.", en: "Describe your room.", key: "describe" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на перевод и напиши слово или фразу. Забыл — вернись к карточкам." }
];

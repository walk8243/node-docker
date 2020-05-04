const january = new Date(9e8);
const english = new Intl.DateTimeFormat('en', { month: 'long' });
const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
const japanese = new Intl.DateTimeFormat('ja', { month: 'long' });
const defaultLanguage = new Intl.DateTimeFormat(undefined, { month: 'long' });

console.log(english.format(january));
console.log(spanish.format(january));
console.log(japanese.format(january));
console.log(defaultLanguage.format(january));

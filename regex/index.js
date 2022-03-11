// simplest one
let some_text = "the dog and cat";
let regex = /the/;
let result = regex.test(some_text);
console.log(result);

// or operator
some_text = "the dog and cat";
regex = /dog|cat/;
result = regex.test(some_text);
console.log(result);

// ignore case
some_text = "FreeCodeCamp"
regex = /freecodecamp/i;
result = regex.test(some_text);
console.log(result);

// match
some_text = "Exstract the word 'coding' from stris string."
regex = /coding/;
result = some_text.match(regex);
console.log(result);

// multiple match
some_text = "Repeat Repeat Repeat"
regex = /repeat/ig;
result = some_text.match(regex);
console.log(result);

// match anything
some_text = "hug hum"
regex = /hu./g;
result = some_text.match(regex);
console.log(result);

// match group
some_text = "bag big bug"
regex = /b[aiu]g/g;
result = some_text.match(regex);
console.log(result);

// match range
some_text = "bag big bug 43432"
regex = /[a-z0-9]/ig;
result = some_text.match(regex);
console.log(result);

// match exception
some_text = "bag big bug 43432"
regex = /[^0-9aiu]/ig;
result = some_text.match(regex);
console.log(result);

// match multiple characters
some_text = "Mississippi"
regex = /s+/ig;
result = some_text.match(regex);
console.log(result);

// match the repeating letter
some_text = "Aaaaaaaaioio!"
regex = /Aa*/ig;
result = some_text.match(regex);
console.log(result);

// match beetwen the letters
some_text = "titanic"
regex = /t[a-z]*i/ig;
result = some_text.match(regex);
console.log(result);

// lazy match beetwen the letters
some_text = "titanic"
regex = /t[a-z]*?i/i;
result = some_text.match(regex);
console.log(result);

// match ALL beetwen the letters
some_text = "<h1>djawidwiadjwaodhuiafiuadaebfdua</h1>"
regex = /<.*>/g;
result = some_text.match(regex);
console.log(result);

// match at the beginning of the string
some_text = "<h1>djawidwiadjwaodhuiafiuadaebfdua</h1>"
regex = /^<h1>/;
result = some_text.match(regex);
console.log(result);

// match at the end of the string
some_text = "<h1>djawidwiadjwaodhuiafiuadaebfdua</h1>"
regex = /<\/h1>$/;
result = some_text.match(regex);
console.log(result);

// match whole eng alphabet and numbers
some_text = "<h1>djawidwiadjwaodhuiafiuadaebfdua</h1> доброго дня"
regex = /\w/g;
result = some_text.match(regex);
console.log(result);

// match whole except eng alphabet and numbers
some_text = "<h1>djawidwiadjwaodhuiafiuadaebfdua</h1> доброго дня"
regex = /\W/g;
result = some_text.match(regex);
console.log(result);

// match digits
some_text = "Your price is 5.00."
regex = /\d/g;
result = some_text.match(regex);
console.log(result);

// match non digits
some_text = "Your price is 5.00."
regex = /\D/g;
result = some_text.match(regex);
console.log(result);

// match spaces
some_text = "Your price is 5.00."
regex = /\s/g;
result = some_text.match(regex);
console.log(result);

// match non spaces
some_text = "Your price is 5.00."
regex = /\S/g;
result = some_text.match(regex);
console.log(result);

// match min and max
some_text = "Ohhh no"
regex = /Oh{1,5} no/g;
result = some_text.match(regex);
console.log(result);

// match exect matches
some_text = "Timmmmber"
regex = /Tim{4}ber/g;
result = some_text.match(regex);
console.log(result);

// match optional parans
some_text = "favorite"
regex = /favou?rite/g;
result = some_text.match(regex);
console.log(result);

// match positive without return
some_text = "qu"
regex = /q(?=u)/g;
result = some_text.match(regex);
console.log(result);

// match positive without return
some_text = "qt"
regex = /q(?!u)/g;
result = some_text.match(regex);
console.log(result);

// re use pattern
some_text = "regex regex"
regex = /(\w+)\s\1/g; // /(\w+)\s(\w+)/g 
result = some_text.match(regex);
console.log(result);

some_text = "42 42 42"
regex = /^(\d+)\s\1\s\1$/g; // /^(\d+)\s(\d+)\s(\d+)$/g
result = some_text.match(regex);
console.log(result);

// replace
some_text = "regex regex"
regex = /(\w+)\s/g; // /(\w+)\s(\w+)/g 
result = some_text.replace(regex, "hello ");
console.log(result);

// replace with args
some_text = "hello regex"
regex = /(\w+)\s(\w+)/; // /(\w+)\s(\w+)/g 
result = some_text.replace(regex, "$2 $1");
console.log(result);

// replace whitespaces
some_text = "   hello regex!   "
regex = /^\s+|\s+$/g;
result = some_text.replace(regex, "");
console.log(result);
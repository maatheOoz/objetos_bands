function Bands(name, year, genre) {
    this.name = name;
    this.year = year;
    this.genre = genre;
}

function Shows(name, year, genre, numberBands) {
    Bands.call(this, name, year, genre)
    this.numberBands = numberBands;
}

function Albuns(name, year, genre, numberAlbum) {
    Bands.call(this, name, year, genre)
    this.numberAlbum = numberAlbum;
}

const unwound = new Bands("Unwound", 1988, "Post-Hardcore")
const leavesTurnInsideYou = new Albuns("Leaves Turn Inside You", 2001, "Post-Hardcore", 7)
const emoShow = new Shows("Emo Show", 2024, "Emo", 10)

console.log(unwound);
console.log(leavesTurnInsideYou);
console.log(emoShow);
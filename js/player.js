class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        document.getElementById("favoriteAlbum").innerHTML = `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

let jbox = new Jukebox();
let albumSel = document.getElementById("album");

let arrAlbums = [
                ['Operation Ivy', 'Energy'],
                ['Blink 182', 'Dude Ranch'],
                ['New Found Glory', 'Sticks and Stones'],
                ['Carole King', 'Tapestry']
                ]

window.addEventListener("load", function() { 
    for (let i = 0; i < arrAlbums.length; i++) {
        albumSel.options[albumSel.options.length] = new Option(`${arrAlbums[i][0]}, ${arrAlbums[i][1]}`);
    }
})

for (let album of arrAlbums) {
    let newAlbum = new Album(album[0], album[1]);
    jbox.addAlbum(newAlbum);
}

let playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
    let albumIndex = albumSel.selectedIndex - 1;
    jbox.albums[albumIndex].play();
})

let favoriteButton = document.getElementById("favorite");
favoriteButton.addEventListener("click", function() {
    jbox.favoriteAlbum();
})

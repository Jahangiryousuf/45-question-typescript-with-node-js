function make_album(artist, title, track) {
    var album = {
        artist_name: artist,
        Album_title: title,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("hamza", "Hamza_Album", 5);
var album2 = make_album("shakir", "shakir_Album", 6);
var album3 = make_album("sarim", "sarim_Album");
console.log(album1);
console.log(album2);
console.log(album3);

function make_album (artist :string,title:string ,track?:number){
        let album : {artist_name : string,
            Album_title : string , track? :number} = {
                artist_name:artist,
                Album_title :title,
        
            };
             if (track !== undefined){
                album.track = track
            } 
            return album ;
}

let album1 =  make_album("hamza","Hamza_Album",5)


let album2 = make_album("shakir","shakir_Album",6)

let album3 = make_album("sarim","sarim_Album")

console.log(album1);

console.log(album2);

console.log(album3);


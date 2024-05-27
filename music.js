const music=document.querySelector("audio");
const play=document.getElementById("play");
const image=document.querySelector("img");
const name=document.getElementById("sname");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const vbar=document.getElementById("vbar");
const shuffle=document.getElementById("shuffle");
const repeat=document.getElementById("repeat");

let progress=document.getElementById("progress");


const songs=[
    {
        name:"At My Worst",
        artist:"Pink Sweat$",
        song:"/music-audio/Atmyworst.mp3",
        image:"/images/Atmyworst.jpg",
    },
    {
        name:"Chaar Kadam",
        artist:"Shaan and Shreya Ghoshal,",
        song:"/music-audio/ChaarKadam.mp3",
        image:"/images/PK Movie.jpeg",
    },
    {
        name:"Like this",
        artist:"Jake Scott",
        song:"/music-audio/Likethis.mp3",
        image:"/images/likethis.jpeg",
    },
    {
        name:"Khairiyat",
        artist:"Arijit Singh",
        song:"/music-audio/khairiyat.mp3",
        image:"/images/Chichhore.jpeg",
    },
    {
        name:"She Dont Give A",
        artist:"King",
        song:"/music-audio/Queen.mp3",
        image:"/images/she Dont Give.jpg"
    }
]

let isPlaying=false;

const playMusic = ()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
};

const pauseMusic = ()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
};

play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
})

//changing music data

const loadSong=(songs)=>{
    name.textContent=songs.name;
    artist.textContent=songs.artist;
    music.src=songs.song;
    image.src=songs.image;
};

let SongIndex=0;

const NextSong =()=>{
    SongIndex = (SongIndex + 1)%songs.length;
    loadSong(songs[SongIndex]);
    playMusic();
}

const PrevSong =()=>{
    SongIndex = (SongIndex - 1 + songs.length)%songs.length;
    loadSong(songs[SongIndex]);
    playMusic();
}

//shuffel code
const shuffles =()=>{
   let random=Math.floor(Math.random()*songs.length);
   loadSong(songs[random]);
   playMusic();
};

//repeat code

const repeats=()=>{
    let current_track=SongIndex;
    loadSong(songs[current_track]);
    playMusic();
}

//preogress js work
music.onloadedmetadata=function(){
    progress.max=music.duration;
    progress.value=music.currentTime;
}

if(music.play()){
    setInterval(()=>{
        progress.value=music.currentTime;
    },500);
}
progress.onchange=function(){
    music.play();
    music.currentTime=progress.value;
    play.classList.replace("fa-play","fa-pause");
}

//volume
function setVolume(){
    music.volume=vbar.value/100;
}

next.addEventListener("click",NextSong);
prev.addEventListener("click",PrevSong);
shuffle.addEventListener("click",shuffles);
repeat.addEventListener("click",repeats);
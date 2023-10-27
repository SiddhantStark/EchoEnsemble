console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Akuma No Ko", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "At my worst", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Choo lo", filePath: "songs/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dandelions", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Titanium", filePath: "songs/5.mp3", coverPath: "covers/1.jpg"},
    {songName: "Arcade", filePath: "songs/6.mp3", coverPath: "covers/2.jpg"},
    {songName: "Perfect", filePath: "songs/7.mp3", coverPath: "covers/2.jpg"},
    {songName: "MockingBird", filePath: "songs/8.mp3", coverPath: "covers/2.jpg"},
    {songName: "Faded", filePath: "songs/9.mp3", coverPath: "covers/2.jpg"},
    {songName: "Hold On", filePath: "songs/10.mp3", coverPath: "covers/2.jpg"},
    {songName: "Let me down slowly X Main dhundne", filePath: "songs/11.mp3", coverPath: "covers/3.jpg"},
    {songName: "Iridescent", filePath: "songs/12.mp3", coverPath: "covers/3.jpg"},
    {songName: "New Divide", filePath: "songs/13.mp3", coverPath: "covers/3.jpg"},
    {songName: "The Night we Met", filePath: "songs/14.mp3", coverPath: "covers/3.jpg"},
    {songName: "Mary on a cross", filePath: "songs/15.mp3", coverPath: "covers/3.jpg"},
    {songName: "On & On", filePath: "songs/16.mp3", coverPath: "covers/3.jpg"},
    {songName: "Let her go", filePath: "songs/17.mp3", coverPath: "covers/4.jpg"},
    {songName: "Yumetourou", filePath: "songs/18.mp3", coverPath: "covers/4.jpg"},
    {songName: "Closer", filePath: "songs/19.mp3", coverPath: "covers/5.jpg"},
    {songName: "Another love", filePath: "songs/20.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tu aake dekh le", filePath: "songs/21.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tum se hi", filePath: "songs/22.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tune jo na kaha", filePath: "songs/23.mp3", coverPath: "covers/5.jpg"},
    {songName: "Until I found you", filePath: "songs/24.mp3", coverPath: "covers/6.jpg"},
    {songName: "Way down we go", filePath: "songs/25.mp3", coverPath: "covers/6.jpg"},
    {songName: "Dusk till dawn", filePath: "songs/26.mp3", coverPath: "covers/7.jpg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
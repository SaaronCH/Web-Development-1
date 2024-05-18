console.log("Welcome To Spotlify");
let songsIndex = 0;
let audioElement = new Audio('songs/SmackThat.mp3');
let masterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById('progressBar')

let songs = [
    { songName: "Smack That", filePath: "F:\Assignment 1\songs\SmackThat.mp3", coverPath: "covers/smackThat.jpg" },
    /*{ songName: "Smack That", filePath: "songs/SmackThat.mp3", coverPath: "covers/smackThat.jpg" },
    { songName: "Smack That", filePath: "songs/SmackThat.mp3", coverPath: "covers/smackThat.jpg" },
    { songName: "Smack That", filePath: "songs/SmackThat.mp3", coverPath: "covers/smackThat.jpg" },
    { songName: "Smack That", filePath: "songs/SmackThat.mp3", coverPath: "covers/smackThat.jpg" },
    { songName: "Smack That", filePath: "songs/SmackThat.mp3", coverPath: "covers/smackThat.jpg" },
    { songName: "Smack That", filePath: "songs/SmackThat.mp3", coverPath: "covers/smackThat.jpg" },
    { songName: "Smack That", filePath: "songs/SmackThat.mp3", coverPath: "covers/smackThat.jpg" }*/
];

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            
        }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
progressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

})
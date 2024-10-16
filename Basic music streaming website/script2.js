console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "tum hain kahan", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "give me some time", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "go", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "tum hain kahan", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "tum hain kahan", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "tum hain kahan", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "tum hain kahan", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "tum hain kahan", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "tum hain kahan", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    { songName: "tum hain kahan", filePath: "C:\\Users\\cliff\\OneDrive\\Documents\\Desktop\\jsfolder\\tum hain kahan.mp3", coverPath: "download.png" },
    // ... (other songs)
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Handle Seekbar change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

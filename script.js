console.log("welcome to Mac Music");


// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Music/m1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let radio = document.getElementById("radio");


let songs = [
    {songName: "Smoke", filePath: "Music/m1.mp3", coverPath: "covers/c1.jpg"},
    {songName: "Rider", filePath: "Music/m2.mp3", coverPath: "covers/c2.jpg"},
    {songName: "Intro-future-chill", filePath: "Music/m3.mp3", coverPath: "covers/c3.jpg"},
    {songName: "After-party", filePath: "Music/m4.mp3", coverPath: "covers/c4.jpg"},
    {songName: "The-podcast-intro", filePath: "Music/m5.mp3", coverPath: "covers/c5.jpg"},
]

songItems.forEach((element, i ) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;      //[0] is used to access the first element in the returned HTMLCollection.
    element.getElementsByClassName('songsName')[0].innerText = songs[i].songName;
});

// audioElement.play();
 
// Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');    // i will add something
        // makeAllPause(); 
        gif.style.opacity = 1;
        radio.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
        makeAllPlays();
        gif.style.opacity = 0;
        radio.style.opacity = 0;

    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{                                     //There is a scope for modification.
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
    let time = Math.floor(audioElement.currentTime)
    if(time<10){
         let form =`00:0${time}`
         document.getElementById("update1").innerHTML = form
        }
        else if(time>=10 &&time<60){
            let form = `00:${time}`
            document.getElementById("update1").innerHTML = form
            
            
        }
        else if(time>=60){
            let form = `0${Math.floor(time/60)}:0${time%60}`
            document.getElementById("update1").innerHTML = form
    }
          


})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration/100);

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
     
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
        

    })
}
// const makeAllPause = ()=>{
//     Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
     
//         element.classList.remove('fa-play-circle');
//         element.classList.add('fa-circle-pause');
        

//     })
// }

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Music/m${index + 1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        radio.style.opacity = 1;
        circle.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `Music/m${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `Music/m${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');

})


audioElement.addEventListener('timeupdate',()=>{
let time = Math.floor(audioElement.currentTime)
if(time<10){
     let form =`00:0${time}`
     document.getElementById("tmt").innerHTML = form
    }
    else if(time>=10 &&time<60){
        let form = `00:${time}`
        document.getElementById("tmt").innerHTML = form
        
        
    }
    else if(time>=60){
        let form = `0${Math.floor(time/60)}:0${time%60}`
        document.getElementById("tmt").innerHTML = form
}
      

})


// let time = document.getElementsByClassName("timeStamp").innerText = Math.floor(audioElement.currentTime);
// console.log(time)

// let time = console.log(audioElement.currentTime)
//   setInterval(time,1000)
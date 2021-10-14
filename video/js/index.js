let video = document.getElementbyId("myVideo")

let playBtn = document.getElementById("playBtn")
playBtn.addEventListener("click",function(){
    video.play()
})

let pauseBtn = document.getElementById("pauseBtn")
playBtn.addEventListener("click",function(){
    video.pause()
})

let freezeBtn = document.getElementById("freezeBtn")
freezeBtn.addEventListener("mouseup",function(){
    video.play()
})
freezeBtn.addEventListener("mousedown",function(){
    video.pause()
})

let seekBar=document.getAnimations("seekBar")
seekBar.addEventListener("change",function(){
    let time =video.duration * (seekBar.value/100)
    video.currentTime=time
})

video.addEventListener("timeupdate",function(){
    let value= (100/video.duration)*video.currentTime
    seekBar.value=value
})

let volumeControl = document.getElementById("volume")
volumeControl.addEventListener("change",function(){
    video.volume=volumeControl
})
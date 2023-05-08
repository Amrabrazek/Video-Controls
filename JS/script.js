
document.querySelector("video").addEventListener("loadeddata", function(){
    let video_duartion = document.querySelector("video").duration;
    // console.log(video_duartion)
    video_duartion = Math.round(video_duartion)
    // console.log(video_duartion)
    document.querySelector("input[type=range]").max = video_duartion

    document.getElementById("time").innerText = "00/"+video_duartion

    let video_volume = document.querySelector("input[type=range]:nth-of-type(8)").value
    console.log(video_volume)

    document.querySelector("video").volume = video_volume / 100

})

document.querySelector("input[type=range]:nth-of-type(1)").addEventListener("input", function ()
{
    let video_time = document.querySelector("input[type=range]:nth-of-type(1)").value
    document.querySelector("video").currentTime = video_time
})

function play() {
    document.querySelector("input[type=range]").value = document.querySelector("video").currentTime
}
setInterval(play, 100)

document.querySelector("input[type=button]:nth-of-type(2)").addEventListener("click", function ()
{
    document.querySelector("video").play()
})

document.querySelector("input[type=button]:nth-of-type(3)").addEventListener("click", function ()
{
    document.querySelector("video").pause()
})

document.querySelector("input[type=button]:nth-of-type(4)").addEventListener("click", function ()
{
    document.querySelector("video").currentTime -= 20
})

document.querySelector("input[type=button]:nth-of-type(5)").addEventListener("click", function ()
{
    document.querySelector("video").currentTime -= 10
})

document.querySelector("input[type=button]:nth-of-type(6)").addEventListener("click", function ()
{
    document.querySelector("video").currentTime += 10
})

document.querySelector("input[type=button]:nth-of-type(7)").addEventListener("click", function ()
{
    document.querySelector("video").currentTime += 20
})

document.querySelector("input[type=range]:nth-of-type(8)").addEventListener("input", function ()
{
    let video_volume = document.querySelector("input[type=range]:nth-of-type(8)").value
    document.querySelector("video").volume = video_volume / 100
})

document.querySelector("input[type=button]:nth-of-type(9)").addEventListener("click", function ()
{
    document.querySelector("video").volume = 0
    document.querySelector("input[type=range]:nth-of-type(8)").value = 0
})

document.querySelector("input[type=range]:nth-of-type(10)").addEventListener("input", function ()
{
    var video_speed = document.querySelector("input[type=range]:nth-of-type(10)").value
    document.querySelector("video").playbackRate = video_speed
})

document.querySelector("input[type=button]:nth-of-type(11)").addEventListener("click", function ()
{
    document.querySelector("video").requestFullscreen ()

})



// onloadeddata 

// document.querySelectors.onloadeddata
// for (var i = 1; i < ranges.length+1; i++)
// {
//     document.querySelector("input[type=range]:nth-of-type("+i+")").addEventListener('input',function(){

//         var red = document.querySelector("input[type=range]:nth-of-type(1)").value
    
//         var green = document.querySelector("input[type=range]:nth-of-type(3)").value
    
//         var blue = document.querySelector("input[type=range]:nth-of-type(2)").value
    
//         var opacity = document.querySelector("input[type=range]:nth-of-type(4)").value

//         paragraph.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
        
//         paragraph.style.opacity = opacity
//     })
// }



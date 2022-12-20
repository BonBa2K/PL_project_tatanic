// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '100%',
        width: '100%',
        videoId: 'SAhBXN8ZgSw',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
    console.log("event.data = ", event.data)
    if (event.data == 5) {
        iframe_in = document.getElementsByTagName('iframe');
        let tl = gsap.timeline({
            onComplete: function () {
                console.log("remove success");
            },
        });
        gsap.to("#article", {
            duration: 2.5, y: window.innerHeight,
        })
        tl.to(".container", {
            duration: 2.5, y: -window.innerHeight
        })
        tl.to("#Taitanic_icon", {
            duration: 3, 
            x: window.innerWidth * 0.5 - document.getElementById('Taitanic_icon').width * 0.5,
            ease:"elastic.out(1, 0.3)"
        })
        tl.to("#article", {
            duration: 2.5, y: 0
        })
        console.log("iframe_in ==", iframe_in);
    }
}
function stopVideo() {
    player.stopVideo();
}
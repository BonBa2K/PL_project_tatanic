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
        tl.to(".video ", {
            duration: 2.5, x: -window.innerWidth
        })
        tl.to(".dragon_pic", {
            duration: 2.5, y: -800, opacity: 1
        })
        tl.to(".down_arrow", {
            duration: 2.5, y: -800, opacity: 1,
            ease: "elastic.out(1, 0.3)"
        })
        // tl.to(".container,.dragon_pic", {
        //     duration: 2.5, y: -window.innerHeight
        // })
        tl.to("#Taitanic_icon", {
            duration: 3,
            x: window.innerWidth * 0.5 - document.getElementById('Taitanic_icon').width * 0.5,
            ease: "elastic.out(1, 0.3)"
        })
        console.log("iframe_in ==", iframe_in);
    }
}
function stopVideo() {
    player.stopVideo();
}
// let select = document.querySelector("#sel_1");
// select.addEventListener("change", Problem_1);
// var p=["0",];

// function Problem_1() {
//     const switchValue = select.options[select.selectedIndex].value;
//     switch (switchValue) {
//         case "1":
//             option_01();
//             break;
//         case "2":
//             option_02();
//             break;
//         case "3":
//             option_03();
//             break;
//         case "4":
//             option_04();
//             break;
//         case "5":
//             option_05();
//             break;
//         case "6":
//             option_06();
//             break;
//         default:
//             return;
//     }
// }
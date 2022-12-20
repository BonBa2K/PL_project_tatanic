var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player1;
        function onYouTubePlayerAPIReady() {
            player1 = new YT.Player('video', {
                width: '100%',
                height: '100%',
                videoId: 'SAhBXN8ZgSw'
            });
        }
        function play() {
            player1.playVideo();
        }
        gsap.to(".video", { duration: 5, x: 100 })
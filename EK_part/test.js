        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                videoId: 'M7lc1UVf-VE',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        function onPlayerReady(e) {
            console.log(e.target.getPlayerState())
        }
        function onPlayerStateChange(e) {
            console.log(e.data)
        }
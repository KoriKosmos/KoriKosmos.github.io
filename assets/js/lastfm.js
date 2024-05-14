document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ZaneJulien&api_key=894fc1acd1282ecebf7dabbf1eb17012&format=json')
        .then(response => response.json())
        .then(data => {
            const tracks = data.recenttracks.track;
            let filteredTracks = [];

            for (let i = 0; i < tracks.length; i++) {
                const track = tracks[i];
                const isMagTrack = /\bMAG\b/.test(track.name);
                const isSurahTrack = /\bSurah\b/.test(track.name);

                if ((i === 0 || track.name !== tracks[i - 1].name) && !isMagTrack && !isSurahTrack) {
                    filteredTracks.push(track);
                }
            }

            let trackList = '<ul>';
            filteredTracks.forEach(track => {
                trackList += `<li>${track.artist['#text']} - ${track.name}</li>`;
            });
            trackList += '</ul>';
            document.getElementById('latest-tracks').innerHTML = trackList;
        })
        .catch(error => console.error('Error fetching data from Last.fm API:', error));
});

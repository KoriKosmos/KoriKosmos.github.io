document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = '894fc1acd1282ecebf7dabbf1eb17012';
    const username = 'ZaneJulien'; // Replace with your Last.fm username
    const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&format=json`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const recentTracks = data.recenttracks.track;

        const albumArtElement = document.querySelector('.album-art');
        const songNameElement = document.querySelector('.song-name');
        const leftArrow = document.querySelector('.nav-arrow.left');
        const rightArrow = document.querySelector('.nav-arrow.right');

        let currentIndex = 0;

        displayTrack(currentIndex);

        leftArrow.addEventListener('click', () => navigateTrack(-1));
        rightArrow.addEventListener('click', () => navigateTrack(1));

        function displayTrack(index) {
            const track = recentTracks[index];
            if (track) {
                const artistName = track.artist['#text'];
                const albumName = track.album['#text'];

                // Fetch album details using album.getInfo method
                fetchAlbumInfo(artistName, albumName).then(albumData => {
                    const albumArtUrl = albumData.album.image.find(image => image.size === 'extralarge')['#text'];

                    albumArtElement.src = albumArtUrl;
                    songNameElement.textContent = `${track.name} by ${artistName}`;
                });
            }
        }

        async function fetchAlbumInfo(artistName, albumName) {
            const albumInfoUrl = `https://ws.audioscrobbler.com/2.0/?method=album.getInfo&api_key=${apiKey}&artist=${encodeURIComponent(artistName)}&album=${encodeURIComponent(albumName)}&format=json`;
            const response = await fetch(albumInfoUrl);
            return response.json();
        }

        function navigateTrack(offset) {
            currentIndex += offset;
            if (currentIndex < 0) {
                currentIndex = recentTracks.length - 1;
            } else if (currentIndex >= recentTracks.length) {
                currentIndex = 0;
            }
            displayTrack(currentIndex);
        }
    } catch (error) {
        console.error('Error fetching recent tracks:', error);
    }
});

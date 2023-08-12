document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = '894fc1acd1282ecebf7dabbf1eb17012';
    const username = 'ZaneJulien';
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
                albumArtElement.src = track.image[1]['#text'];
                songNameElement.textContent = `${track.name} by ${track.artist['#text']}`;
            }
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
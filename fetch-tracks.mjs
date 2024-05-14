import fetch from 'node-fetch';
import fs from 'fs';
import 'dotenv/config';

const apiKey = process.env.LASTFM_API_KEY;
const username = process.env.LASTFM_USERNAME;

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`)
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

        fs.writeFileSync('./_includes/latest-tracks.html', trackList);
    })
    .catch(error => console.error('Error fetching data from Last.fm API:', error));
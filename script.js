document.addEventListener('DOMContentLoaded', async () => {
    const usernameElements = document.querySelectorAll('.username');
    const username = 'KoriKosmos';

    usernameElements.forEach(element => {
        element.textContent = username;
    });

    const imageUsernameElement = document.querySelector('.card-image .username');
    imageUsernameElement.textContent = `${username} | Mori Calliope © 2016 - ${new Date().getFullYear()} Cover Corp`;

    const copyrightElement = document.querySelector('#copyright');
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `${currentYear} ${username}`;

    // New code to fetch a random artwork and credit the artist
    const backgroundImageElement = document.body; // Select the body or a specific element as the background

    // Fetch a random artwork of "Oozora Subaru" using the Donmai API
    const apiUrl = 'https://danbooru.donmai.us/posts.json?tags=oozora_subaru';
    try {
        const response = await fetch(apiUrl);
        const artworks = await response.json();

        // Choose a random artwork from the fetched data
        const randomIndex = Math.floor(Math.random() * artworks.length);
        const randomArtwork = artworks[randomIndex];

        // Set the chosen artwork as the background image
        backgroundImageElement.style.backgroundImage = `url(${randomArtwork.file_url})`;

        // Credit the artist in the footer
        const artistName = randomArtwork.tag_string_artist;
        const footerArtistElement = document.querySelector('.footer-artist');
        footerArtistElement.textContent = `Artwork by ${artistName}`;
    } catch (error) {
        console.error('Error fetching artwork:', error);
    }
});
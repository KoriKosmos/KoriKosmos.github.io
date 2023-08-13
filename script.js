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

    /*

    // New code to fetch a random artwork and credit the artist
    const backgroundImageElement = document.body; // Select the body or a specific element as the background

    // Fetch a random artwork of "Oozora Subaru" using the Donmai API

    // Choose either "highres" or "absurdres" tag
    const chosenTag = Math.random() < 0.5 ? 'highres' : 'absurdres';

    // Fetch images with the chosen tag
    const apiUrl = `https://danbooru.donmai.us/posts.json?tags=oozora_subaru+-rating%3Aexplicit+-rating%3Asuggestive+${chosenTag}`;
    try {
        const response = await fetch(apiUrl);
        const artworks = await response.json();

        // Choose a random artwork from the fetched data
        const randomIndex = Math.floor(Math.random() * artworks.length);
        const randomArtwork = artworks[randomIndex];


        // Calculate screen dimensions
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Calculate the aspect ratio of the fetched image
        const aspectRatio = randomArtwork.image_width / randomArtwork.image_height;

        // Calculate appropriate background dimensions based on screen size
        let backgroundWidth, backgroundHeight;
        if (screenWidth / screenHeight > aspectRatio) {
            // Screen is wider than the image's aspect ratio
            backgroundWidth = screenWidth;
            backgroundHeight = screenWidth / aspectRatio;
        } else {
            // Screen is taller than the image's aspect ratio
            backgroundHeight = screenHeight;
            backgroundWidth = screenHeight * aspectRatio;
        }

        // Set the background size
        backgroundImageElement.style.backgroundSize = `${backgroundWidth}px ${backgroundHeight}px`;

        // Set the chosen artwork as the background image
        backgroundImageElement.style.backgroundImage = `url(${randomArtwork.file_url})`;

        // Credit the artist in the footer
        const artistName = randomArtwork.tag_string_artist;
        const footerArtistElement = document.querySelector('.footer-artist');
        footerArtistElement.textContent = `Artwork by ${artistName}`;
    } catch (error) {
        console.error('Error fetching artwork:', error);
    }


       */
});

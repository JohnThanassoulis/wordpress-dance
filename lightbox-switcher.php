<?php
// api/lightbox-switcher.php

// Define the path to your gallery file
$galleryFilePath = '../gallery/index.html';

// Check if the gallery file exists
if (file_exists($galleryFilePath)) {
    // Get the content of the gallery file
    $galleryContent = file_get_contents($galleryFilePath);

    // Replace the attributes
    $modifiedContent = str_replace('data-elementor-open-lightbox', 'data-fslightbox', $galleryContent);

    // Save the modified content back to the file (optional)
    file_put_contents($galleryFilePath, $modifiedContent);

    // Display the modified gallery content
    echo $modifiedContent;
} else {
    echo "Gallery file not found.";
}
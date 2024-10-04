import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    try {
        // Get the absolute path to the gallery file within the API directory
        const galleryFilePath = path.resolve('./api/gallery/index.html');

        // Read the gallery file content
        const galleryContent = await fs.readFile(galleryFilePath, 'utf-8');

        // Replace the attributes
        const modifiedContent = galleryContent.replace(/data-elementor-open-lightbox/g, 'data-fslightbox');

        // Send the modified content as the response
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(modifiedContent);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ message: "Error reading or modifying gallery file.", error: error.toString() });
    }
}

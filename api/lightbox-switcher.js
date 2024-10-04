export default async function handler(req, res) {
    try {
        // Determine base URL based on environment
        const baseUrl = process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}` // Deployed environment (Vercel)
            : 'http://localhost:3000';           // Local development

        // Fetch the gallery file from the public directory
        const response = await fetch(`${baseUrl}/gallery/index.html`);
        const galleryContent = await response.text();

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

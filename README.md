# DEW Drop Construction Company Website

This is the official website for DEW Drop Construction Company, showcasing our services, company information, and contact details.

## Project Structure

- `index.html`: The main homepage.
- `about.html`: Information about the company.
- `services.html`: Details about the services offered.
- `contact.html`: Contact form and information.
- `style.css`: Main stylesheet for the website.
- `script.js`: JavaScript for interactive functionalities.
- `images/`: Contains various images used across the website.
- `images_webp/`: Contains WebP optimized versions of images.
- `_config.yml`: Jekyll configuration file for GitHub Pages deployment.

## Building and Running Locally

This project is a static website and does not require a complex build process. To view it locally:

1.  **Navigate to the project directory:**
    ```bash
    cd /home/juniorm/Downloads/dewdropcon
    ```
2.  **Start a local web server:**
    You can use Python's built-in HTTP server:
    ```bash
    python3 -m http.server
    ```
    Or any other local web server you prefer.

3.  **Open in your browser:**
    Once the server is running, open your web browser and go to `http://localhost:8000` (or the port indicated by your server).

## Deployment

This website is configured for deployment on GitHub Pages using Jekyll. The `_config.yml` file is set up for this purpose.

## Development Conventions

-   **HTML:** Semantic and well-structured HTML.
-   **CSS:** All styling is in `style.css`, including responsive design.
-   **JavaScript:** `script.js` handles dynamic elements like copyright year updates and active navigation highlighting.

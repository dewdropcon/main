document.addEventListener("DOMContentLoaded", () => {
    
    /* -------------------------------------------------------
     * 1. Dynamic Year in Footer
     * -------------------------------------------------------- */
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    
    /* -------------------------------------------------------
     * 2. Active Navigation Highlight
     * -------------------------------------------------------- */
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("header nav ul li a");
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            document.querySelector("header nav ul li.current")?.classList.remove("current");
            link.parentElement.classList.add("current");
        }
    });
    
    
    /* -------------------------------------------------------
     * 3. Smooth Scroll for Anchor Links
     * -------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetEl = document.querySelector(this.getAttribute("href"));
            if (!targetEl) return;
            
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
    
    
    /* -------------------------------------------------------
     * 4. Sticky Header + Shrink on Scroll
     * -------------------------------------------------------- */
    const header = document.querySelector("header");
    let lastScroll = 0;
    
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 60) {
            header.classList.add("header-shrink");
        } else {
            header.classList.remove("header-shrink");
        }
        
        lastScroll = currentScroll;
    });
    
    
    /* -------------------------------------------------------
     * 5. Fade-In Sections on Scroll (Intersection Observer)
     * -------------------------------------------------------- */
    const revealElements = document.querySelectorAll(
        "section, .service-preview, .why-item"
    );
    
    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    
    /* -------------------------------------------------------
     * 6. Mobile Menu Toggle
     * -------------------------------------------------------- */
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
    
});

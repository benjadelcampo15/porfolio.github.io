
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = targetElement.offsetTop - 50; // Ajusta este valor según sea necesario
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });
            }
        });
    });
});
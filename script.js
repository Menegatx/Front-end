document.addEventListener('DOMContentLoaded', () => {
    // Staggered Animation for Links
    const links = document.querySelectorAll('.link-card');
    const socials = document.querySelector('.socials');
    
    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });

    // Animate Socials last
    setTimeout(() => {
        if(socials) {
            socials.style.opacity = '1';
            socials.style.transform = 'translateY(0)';
        }
    }, 150 * (links.length + 1));

    console.log('✨ Page loaded with magic!');
});

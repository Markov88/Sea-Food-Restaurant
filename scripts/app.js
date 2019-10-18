(function () {
    let previousScroll = 0;
    let header = document.getElementById('nav_header');
    let headerClasses = header.classList;

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;
        let isDown = currentScroll > previousScroll;
        if (isDown && !headerClasses.contains('scrolled')) {
            headerClasses.add('scrolled'); 
        } else if (!isDown) {
            headerClasses.remove('scrolled');
        }
        previousScroll = currentScroll;
    });
    
}()); 
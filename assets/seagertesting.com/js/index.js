window.onload = function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link')

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        })
    });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const certificateItems = document.querySelectorAll('.certificate-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        // Add active class to the clicked button and remove from others
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        certificateItems.forEach(item => {
            const itemFilter = item.dataset.filter;

            // Show or hide items based on the filter
            if (filter === 'all' || filter === itemFilter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

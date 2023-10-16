window.onload = function() {
    var buttons = document.querySelectorAll('#filters button');
    var certificates = document.querySelectorAll('.certificate');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var filter = this.dataset.filter;

            certificates.forEach(function(certificate) {
                if (filter === 'all') {
                    certificate.style.display = 'block';
                } else {
                    if (certificate.classList.contains(filter)) {
                        certificate.style.display = 'block';
                    } else {
                        certificate.style.display = 'none';
                    }
                }
            });
        });
    });

    // Show all certificates on page load
    certificates.forEach(function(certificate) {
        certificate.style.display = 'block';
    });
};

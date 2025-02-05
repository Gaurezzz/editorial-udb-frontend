const sections = document.querySelectorAll('.section');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentSectionIndex = 0;

        function showSection(index) {
            sections.forEach((section, i) => {
                section.classList.toggle('active', i === index);
            });
        }

        prevButton.addEventListener('click', () => {
            currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
            showSection(currentSectionIndex);
        });

        nextButton.addEventListener('click', () => {
            currentSectionIndex = (currentSectionIndex + 1) % sections.length;
            showSection(currentSectionIndex);
        });
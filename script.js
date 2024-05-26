document.addEventListener('DOMContentLoaded', () => {
    const monthlyImage = document.getElementById('monthlyImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentDate = new Date();

    function formatDate(date) {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero
        return `${year}-${month}`;
    }

    function updateImage() {
        const imagePath = `images/${formatDate(currentDate)}.jpg`;
        monthlyImage.src = imagePath;
        monthlyImage.alt = `Image for ${currentDate.toLocaleDateString('default', { year: 'numeric', month: 'long' })}`;
    }

    function changeMonth(months) {
        currentDate.setMonth(currentDate.getMonth() + months);
        updateImage();
    }

    prevButton.addEventListener('click', () => changeMonth(-1));
    nextButton.addEventListener('click', () => changeMonth(1));

    // Set the initial image
    updateImage();
});

function categorizeProducts() {
    let lowCount = 0;
    let midCount = 0;
    let highCount = 0;

    const rows = document.querySelectorAll('#product tbody tr');

    rows.forEach(row => {
        const price = parseInt(row.cells[2].textContent);

        row.classList.remove('low-price', 'mid-price', 'high-price');

        if (price < 100) {
            row.classList.add('low-price');
            lowCount++;
        } else if (price >= 300 && price < 800) {
            row.classList.add('mid-price');
            midCount++;
        } else {
            row.classList.add('high-price');
            highCount++;
        }
    });


    document.getElementById('lowCount').textContent = lowCount;
    document.getElementById('midCount').textContent = midCount;
    document.getElementById('highCount').textContent = highCount;
}
document.getElementById('categorizeButn').addEventListener('click', categorizeProducts);

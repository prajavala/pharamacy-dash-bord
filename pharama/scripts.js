function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function searchMedicine() {
    const searchQuery = document.getElementById('search').value;
    // Perform search logic here, possibly an AJAX call to fetch data
    document.getElementById('medicine-list').innerHTML = `Results for "${searchQuery}"`;
}

function addMedicine() {
    const brandName = document.getElementById('brand-name').value;
    const genericName = document.getElementById('generic-name').value;
    const dosage = document.getElementById('dosage').value;
    const packaging = document.getElementById('packaging').value;
    const supplier = document.getElementById('supplier').value;

    // Perform add medicine logic here, possibly an AJAX call to add data to database
    alert(`Medicine ${brandName} added successfully!`);
}

function checkExpiry() {
    const medicineName = document.getElementById('expiry-check').value;
    // Perform expiry check logic here, possibly an AJAX call to fetch data
    document.getElementById('stock-alerts').innerHTML = `Expiry details for "${medicineName}"`;
}

// Initialize the first page as active
document.addEventListener('DOMContentLoaded', () => {
    showPage('medicine-database');
});

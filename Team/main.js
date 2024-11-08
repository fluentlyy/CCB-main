 // Dropdown function to toggle visibility
 function toggleDropdown() {
    const dropdownList = document.querySelector('.dropdown-list');
    dropdownList.classList.toggle('show');
}

// Function to select dropdown option
function selectOption(lang) {
    document.querySelector('.dropdown-selected').textContent = lang;
    toggleDropdown();
}

// Dropdown for the footer part
function toggleDropdownNew() {
    const dropdownListNew = document.querySelector('.dropdown-list-new');
    dropdownListNew.classList.toggle('show');
}

function selectOptionNew(lang) {
    document.querySelector('.dropdown-selected-new').textContent = lang;
    toggleDropdownNew();
}

// Close the dropdowns if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-select')) {
        const dropdownList = document.querySelector('.dropdown-list');
        if (dropdownList.classList.contains('show')) {
            dropdownList.classList.remove('show');
        }
    }

    if (!event.target.matches('.dropdown-select-new')) {
        const dropdownListNew = document.querySelector('.dropdown-list-new');
        if (dropdownListNew.classList.contains('show')) {
            dropdownListNew.classList.remove('show');
        }
    }
}
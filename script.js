import { icons } from './icons.js';

// Initialize the page
function init() {
    const container = document.getElementById('icons-container');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
    container.style.gap = '10px';
    container.style.padding = '20px';

    // Display all icons initially
    displayIcons(icons);

    // Get DOM elements
    const searchInput = document.querySelector('input');
    const searchButton = document.querySelector('button:first-of-type');
    const resetButton = document.querySelector('button:last-of-type');

    // Add event listeners
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredIcons = icons.filter(icon => 
            icon.toLowerCase().includes(searchTerm)
        );
        displayIcons(filteredIcons);
    });

    resetButton.addEventListener('click', () => {
        searchInput.value = '';
        displayIcons(icons);
    });

    // Handle Enter key in search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Function to display icons
function displayIcons(iconsToDisplay) {
    const container = document.getElementById('icons-container');
    container.innerHTML = ''; // Clear existing icons
    
    iconsToDisplay.forEach(iconClass => {
        const iconContainer = document.createElement('div');
        iconContainer.style.display = 'flex';
        iconContainer.style.flexDirection = 'column';
        iconContainer.style.alignItems = 'center';
        iconContainer.style.margin = '10px';
        
        const icon = document.createElement('i');
        icon.className = iconClass;
        icon.style.fontSize = '24px';
        icon.style.marginBottom = '5px';
        
        const iconName = document.createElement('span');
        iconName.textContent = iconClass.split(' ').pop();
        iconName.style.fontSize = '10px';
        iconName.style.textAlign = 'center';
        iconName.style.wordBreak = 'break-word';
        
        iconContainer.appendChild(icon);
        iconContainer.appendChild(iconName);
        container.appendChild(iconContainer);
    });
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
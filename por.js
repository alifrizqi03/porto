
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contens");



function opentab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach((content) => {
        content.classList.remove('active-tab');
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active-tab');
    }

    // Remove the 'active-link' class from all tab links
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach((link) => {
        link.classList.remove('active-link');
    });

    // Add the 'active-link' class to the clicked tab link
    const clickedTabLink = document.querySelector(`[onclick="opentab('${tabId}')"]`);
    if (clickedTabLink) {
        clickedTabLink.classList.add('active-link');
    }
}

// Function to toggle the menu open and close
function toggleMenu() {
    var sideMenu = document.getElementById("sidemenu");
    sideMenu.classList.toggle("active");
}








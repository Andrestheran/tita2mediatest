var selectedModule = "All";
var filterMode = "Grid";
const menuOptions = ["All", "Branding", "Web", "Photography", "App"];
const imagesMenus = {
  All: [
    "ales-nesetril-Im7lZjxeLhg-unsplash.jpg",
    "alexander-shatov-mr4JG4SYOF8-unsplash.jpg",
    "balazs-ketyi-FeuEg-8XlA8-unsplash.jpg",
    "christopher-gower-m_HRfLhgABo-unsplash.jpg",
    "ishan-seefromthesky-TobZaa8ZwI4-unsplash.jpg",
    "krakenimages-376KN_ISplE-unsplash.jpg",
    "mika-baumeister-K47xNClfpyg-unsplash.jpg",
    "mohamed-nohassi-odxB5oIG_iA-unsplash.jpg",
    "neil-soni-6wdRuK7bVTE-unsplash.jpg",
    
  ],
  Branding: [
    "mohamed-nohassi-odxB5oIG_iA-unsplash.jpg",
    "neil-soni-6wdRuK7bVTE-unsplash.jpg",
    
  ],
  Web: [
    "ales-nesetril-Im7lZjxeLhg-unsplash.jpg",
    "alexander-shatov-mr4JG4SYOF8-unsplash.jpg",
  ],
  Photography: [
    "balazs-ketyi-FeuEg-8XlA8-unsplash.jpg",
    "christopher-gower-m_HRfLhgABo-unsplash.jpg",
  ],
  App: [
    "ishan-seefromthesky-TobZaa8ZwI4-unsplash.jpg",
    "krakenimages-376KN_ISplE-unsplash.jpg",
  ],
};

function setSelectedModule(moduleName) {
  selectedModule = moduleName;
  paintMenuOptions();
}

function paintMenuOptions() {
  let buttonsContainer = document.getElementsByClassName("buttons-container");
  let menuOptionsHtml = "";
  menuOptions.forEach((option) => {
    menuOptionsHtml += `<div 
        class="menu-button ${
          option === selectedModule ? "menu-button-selected" : ""
        }" onclick="setSelectedModule('${option}')"><span>${option}</span></div>`;
  });
  for (const buttonContainer of buttonsContainer) {
    buttonContainer.innerHTML = menuOptionsHtml;
  }
  paintImages();
}

function paintImages() {
  let scrollImage = document.getElementById("scroll-images");
  let imagesHtml = "";
  imagesMenus[selectedModule].forEach((url, index) => {
    imagesHtml += `<li><img loading="lazy" alt="Image-${index}" src="./assets/${url}"/></li>`;
  });
  scrollImage.innerHTML = imagesHtml;
}
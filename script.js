
// ================================
// RECHERCHE DES MATIÈRES
// ================================

const searchInput = document.getElementById("searchInput");

const subjects = document.querySelectorAll(".subject-card");

const subjectsGrid = document.getElementById("subjectsGrid");

const emptyState = document.getElementById("emptyState");

const resultsInfo = document.getElementById("resultsInfo");


// Normaliser le texte pour faciliter la recherche
function normalizeText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


// Rechercher une matière
searchInput.addEventListener("input", function () {

    const searchValue = normalizeText(
        searchInput.value.trim()
    );

    let visibleCount = 0;

    subjects.forEach(function (subject) {

        const subjectName = normalizeText(subject.innerText);

        const keywords = normalizeText(
            subject.dataset.search || ""
        );

        const isVisible =
            subjectName.includes(searchValue) ||
            keywords.includes(searchValue);

        subject.hidden = !isVisible;

        if (isVisible) {
            visibleCount++;
        }

    });


    // Mettre à jour le nombre de résultats
    resultsInfo.textContent =
        visibleCount +
        (visibleCount > 1
            ? " matières trouvées"
            : " matière trouvée"
        );


    // Afficher un message si aucun résultat
    emptyState.hidden = visibleCount !== 0;

    subjectsGrid.hidden = visibleCount === 0;

});


// ================================
// MENU DE NAVIGATION MOBILE
// ================================

const menuToggle = document.getElementById("menuToggle");

const navigation = document.getElementById("navigation");


menuToggle.addEventListener("click", function () {

    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


// Fermer le menu après avoir sélectionné un lien
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// ================================
// ANNÉE AUTOMATIQUE
// ================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

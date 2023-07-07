export default () => {
    const accordion = document.querySelector(".accordion");
    if (accordion) {
        accordion.addEventListener("click", (e) => {
            const activePanel = e.target.closest(".accordion-panel");
            if (!activePanel) return;
            toggleAccordion(activePanel);
        });
        function toggleAccordion (panelToActivate) {
            const activeButton = panelToActivate.querySelector("button");
            const activePanel = panelToActivate.querySelector(".accordion-content");
            const activePanelIsOpened = activeButton.getAttribute("aria-expanded");
            const activePanels = document.querySelectorAll(".accordion-panel");
            activePanels.forEach((panel) => {
                if (panel !== panelToActivate) {
                    const button = panel.querySelector("button");
                    const content = panel.querySelector(".accordion-content");
                    button.setAttribute("aria-expanded", false);
                    content.setAttribute("aria-hidden", true);
                }
            });
            if (activePanelIsOpened === "true") {
                activeButton.setAttribute("aria-expanded", false);
                activePanel.setAttribute("aria-hidden", true);
            } else {
                activeButton.setAttribute("aria-expanded", true);
                activePanel.setAttribute("aria-hidden", false);
            }
        }
    }
}
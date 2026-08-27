/* =========================================================
   Healthcare BA & AI Portfolio
   Projects Dropdown Navigation
   ========================================================= */

(function () {
  "use strict";

  const projects = [
    {
      name: "Hospital Management System",
      shortName: "Hospital Management",
      icon: "🏥",
      path: "hms/"
    },
    {
      name: "AI Healthcare RCM",
      shortName: "AI RCM",
      icon: "🤖",
      path: "rcm/"
    },
    {
      name: "Clinical Trial Management",
      shortName: "Clinical Trials",
      icon: "🧪",
      path: "ctms/"
    },
    {
      name: "Healthcare Analytics Dashboard",
      shortName: "Healthcare Analytics",
      icon: "📊",
      path: "analytics/"
    },
    {
      name: "AI Pharmacovigilance (VigilAI)",
      shortName: "VigilAI",
      icon: "🛡️",
      path: "pv/"
    }
  ];

  function getSiteBase() {
    const path = window.location.pathname;

    const marker = "/healthcare-ba-ai-portfolio-/";

    if (path.includes(marker)) {
      return path.split(marker)[0] + marker;
    }

    return "/";
  }

  function createProjectsMenu() {

    const tabsList = document.querySelector(".md-tabs__list");

    if (!tabsList) {
      return;
    }

    /*
     * Don't create it twice.
     */
    if (document.querySelector(".tsr-projects-dropdown")) {
      return;
    }

    /*
     * Find the existing Projects tab.
     */
    const tabItems = Array.from(
      tabsList.querySelectorAll(".md-tabs__item")
    );

    const projectsTab = tabItems.find(function (item) {

      const link = item.querySelector(".md-tabs__link");

      return (
        link &&
        link.textContent.trim().toLowerCase() === "projects"
      );
    });

    if (!projectsTab) {
      return;
    }

    /*
     * Create the dropdown wrapper.
     */
    const wrapper = document.createElement("li");

    wrapper.className =
      "md-tabs__item tsr-projects-dropdown";

    /*
     * Create dropdown button.
     */
    const button = document.createElement("button");

    button.type = "button";

    button.className = "tsr-projects-button";

    button.setAttribute(
      "aria-expanded",
      "false"
    );

    button.setAttribute(
      "aria-haspopup",
      "true"
    );

    button.innerHTML = `
      <span>Projects</span>
      <span class="tsr-projects-chevron">▾</span>
    `;

    /*
     * Create menu.
     */
    const menu = document.createElement("div");

    menu.className = "tsr-projects-menu";

    menu.setAttribute(
      "role",
      "menu"
    );

    const base = getSiteBase();

    projects.forEach(function (project) {

      const link = document.createElement("a");

      link.className = "tsr-project-link";

      link.href = base + project.path;

      link.setAttribute(
        "role",
        "menuitem"
      );

      link.innerHTML = `
        <span class="tsr-project-icon">
          ${project.icon}
        </span>

        <span class="tsr-project-name">
          ${project.name}
        </span>
      `;

      menu.appendChild(link);
    });

    wrapper.appendChild(button);
    wrapper.appendChild(menu);

    /*
     * Replace Material's original Projects tab.
     */
    projectsTab.replaceWith(wrapper);

    /*
     * Toggle dropdown.
     */
    button.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      const isOpen =
        wrapper.classList.contains("tsr-projects-open");

      closeProjectsMenu();

      if (!isOpen) {

        wrapper.classList.add(
          "tsr-projects-open"
        );

        button.setAttribute(
          "aria-expanded",
          "true"
        );
      }
    });

    /*
     * Close after selecting a project.
     */
    menu.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        closeProjectsMenu();

      });

    });

    /*
     * Close when clicking elsewhere.
     */
    document.addEventListener(
      "click",
      function (event) {

        if (!wrapper.contains(event.target)) {
          closeProjectsMenu();
        }

      }
    );

    /*
     * Close with Escape.
     */
    document.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Escape") {
          closeProjectsMenu();
        }

      }
    );
  }

  function closeProjectsMenu() {

    const wrapper =
      document.querySelector(
        ".tsr-projects-dropdown"
      );

    if (!wrapper) {
      return;
    }

    wrapper.classList.remove(
      "tsr-projects-open"
    );

    const button =
      wrapper.querySelector(
        ".tsr-projects-button"
      );

    if (button) {

      button.setAttribute(
        "aria-expanded",
        "false"
      );

    }
  }

  /*
   * Initial page load.
   */
  function init() {
    createProjectsMenu();
  }

  /*
   * Material for MkDocs uses instant navigation.
   *
   * Re-run after every navigation event.
   */
  if (typeof document$ !== "undefined") {

    document$.subscribe(function () {

      setTimeout(
        createProjectsMenu,
        50
      );

    });

  } else {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  }

})();

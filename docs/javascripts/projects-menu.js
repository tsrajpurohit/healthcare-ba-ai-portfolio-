/* =========================================================
   Healthcare BA & AI Portfolio
   Projects Dropdown Navigation
   ========================================================= */

(function () {
  "use strict";

  const projects = [
    {
      name: "Hospital Management System",
      icon: "🏥",
      path: "hms/"
    },
    {
      name: "AI Healthcare RCM",
      icon: "🤖",
      path: "rcm/"
    },
    {
      name: "Clinical Trial Management",
      icon: "🧪",
      path: "ctms/"
    },
    {
      name: "Healthcare Analytics Dashboard",
      icon: "📊",
      path: "analytics/"
    },
    {
      name: "AI Pharmacovigilance (VigilAI)",
      icon: "🛡️",
      path: "pv/"
    }
  ];

  /* ---------------------------------------------------------
     Get MkDocs site base URL
     --------------------------------------------------------- */

  function getSiteBase() {
    const base = document.querySelector("base");

    if (base && base.href) {
      return base.href.replace(/\/$/, "") + "/";
    }

    const siteUrl = document.querySelector(
      'meta[name="generator"]'
    );

    const pathname = window.location.pathname;

    /*
     * GitHub Pages repository deployment
     */
    if (pathname.includes("/healthcare-ba-ai-portfolio-/")) {
      return "/healthcare-ba-ai-portfolio-/";
    }

    return "/";
  }


  /* ---------------------------------------------------------
     Close dropdown
     --------------------------------------------------------- */

  function closeProjectsMenu(wrapper) {

    if (!wrapper) {
      wrapper = document.querySelector(
        ".tsr-projects-dropdown"
      );
    }

    if (!wrapper) {
      return;
    }

    wrapper.classList.remove(
      "tsr-projects-open"
    );

    const button = wrapper.querySelector(
      ".tsr-projects-button"
    );

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  }


  /* ---------------------------------------------------------
     Create dropdown
     --------------------------------------------------------- */

  function createProjectsMenu() {

    const tabsList = document.querySelector(
      ".md-tabs__list"
    );

    if (!tabsList) {
      return;
    }

    /*
     * Prevent duplicates.
     */
    if (
      tabsList.querySelector(
        ".tsr-projects-dropdown"
      )
    ) {
      return;
    }


    /* -------------------------------------------------------
       Find original Projects tab
       ------------------------------------------------------- */

    const tabItems = Array.from(
      tabsList.querySelectorAll(
        ".md-tabs__item"
      )
    );

    const projectsTab = tabItems.find(
      function (item) {

        const link = item.querySelector(
          ".md-tabs__link"
        );

        return (
          link &&
          link.textContent
            .trim()
            .toLowerCase() === "projects"
        );

      }
    );


    /*
     * Projects tab doesn't exist.
     */
    if (!projectsTab) {
      console.warn(
        "Projects dropdown: Projects tab not found."
      );

      return;
    }


    /* -------------------------------------------------------
       Wrapper
       ------------------------------------------------------- */

    const wrapper = document.createElement(
      "li"
    );

    wrapper.className =
      "md-tabs__item tsr-projects-dropdown";


    /* -------------------------------------------------------
       Button
       ------------------------------------------------------- */

    const button = document.createElement(
      "button"
    );

    button.type = "button";

    button.className =
      "md-tabs__link tsr-projects-button";

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
      <span
        class="tsr-projects-chevron"
        aria-hidden="true"
      >▾</span>
    `;


    /* -------------------------------------------------------
       Dropdown menu
       ------------------------------------------------------- */

    const menu = document.createElement(
      "div"
    );

    menu.className =
      "tsr-projects-menu";

    menu.setAttribute(
      "role",
      "menu"
    );


    /* -------------------------------------------------------
       Site base
       ------------------------------------------------------- */

    const base = getSiteBase();


    /* -------------------------------------------------------
       Create project links
       ------------------------------------------------------- */

    projects.forEach(
      function (project) {

        const link = document.createElement(
          "a"
        );

        link.className =
          "tsr-project-link";

        link.href =
          base + project.path;

        link.setAttribute(
          "role",
          "menuitem"
        );

        link.innerHTML = `
          <span
            class="tsr-project-icon"
            aria-hidden="true"
          >
            ${project.icon}
          </span>

          <span class="tsr-project-name">
            ${project.name}
          </span>
        `;

        menu.appendChild(link);

      }
    );


    /* -------------------------------------------------------
       Assemble
       ------------------------------------------------------- */

    wrapper.appendChild(button);
    wrapper.appendChild(menu);


    /* -------------------------------------------------------
       Replace original Projects tab
       ------------------------------------------------------- */

    projectsTab.replaceWith(
      wrapper
    );


    /* -------------------------------------------------------
       Toggle
       ------------------------------------------------------- */

    button.addEventListener(
      "click",
      function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isOpen =
          wrapper.classList.contains(
            "tsr-projects-open"
          );

        /*
         * Close any other open dropdown.
         */
        document
          .querySelectorAll(
            ".tsr-projects-dropdown"
          )
          .forEach(
            function (item) {
              closeProjectsMenu(item);
            }
          );


        /*
         * Open this dropdown.
         */
        if (!isOpen) {

          wrapper.classList.add(
            "tsr-projects-open"
          );

          button.setAttribute(
            "aria-expanded",
            "true"
          );

        }

      }
    );


    /* -------------------------------------------------------
       Close after clicking project
       ------------------------------------------------------- */

    menu
      .querySelectorAll("a")
      .forEach(
        function (link) {

          link.addEventListener(
            "click",
            function () {

              closeProjectsMenu(
                wrapper
              );

            }
          );

        }
      );


    /* -------------------------------------------------------
       Outside click
       ------------------------------------------------------- */

    document.addEventListener(
      "click",
      function (event) {

        if (
          !wrapper.contains(
            event.target
          )
        ) {

          closeProjectsMenu(
            wrapper
          );

        }

      }
    );


    /* -------------------------------------------------------
       Escape
       ------------------------------------------------------- */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape"
        ) {

          closeProjectsMenu(
            wrapper
          );

        }

      }
    );

  }


  /* ---------------------------------------------------------
     Initialize
     --------------------------------------------------------- */

  function initProjectsDropdown() {

    /*
     * Small delay allows Material's navigation
     * to finish rendering.
     */

    setTimeout(
      createProjectsMenu,
      100
    );

  }


  /* ---------------------------------------------------------
     Material instant navigation
     * --------------------------------------------------------- */

  if (
    typeof document$ !== "undefined"
  ) {

    document$.subscribe(
      function () {

        initProjectsDropdown();

      }
    );

  } else {

    document.addEventListener(
      "DOMContentLoaded",
      initProjectsDropdown
    );

  }

})();

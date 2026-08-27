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


  /* =========================================================
     SITE BASE
     ========================================================= */

  function getSiteBase() {

    const pathname = window.location.pathname;

    const marker =
      "/healthcare-ba-ai-portfolio-/";

    if (pathname.includes(marker)) {
      return (
        pathname.split(marker)[0] +
        marker
      );
    }

    return "/";
  }


  /* =========================================================
     CLOSE MENU
     ========================================================= */

  function closeMenu(wrapper) {

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


  /* =========================================================
     CREATE MENU
     ========================================================= */

  function createProjectsMenu() {

    const tabsList =
      document.querySelector(
        ".md-tabs__list"
      );

    if (!tabsList) {
      return;
    }


    /* Prevent duplicate */

    if (
      tabsList.querySelector(
        ".tsr-projects-dropdown"
      )
    ) {
      return;
    }


    /* Find Projects tab */

    const tabItems =
      Array.from(
        tabsList.querySelectorAll(
          ".md-tabs__item"
        )
      );

    const projectsTab =
      tabItems.find(
        function (item) {

          const link =
            item.querySelector(
              ".md-tabs__link"
            );

          return (
            link &&
            link.textContent
              .trim()
              .toLowerCase() ===
              "projects"
          );

        }
      );


    if (!projectsTab) {

      console.warn(
        "TSR Projects: Projects tab not found."
      );

      return;
    }


    /* =======================================================
       WRAPPER
       ======================================================= */

    const wrapper =
      document.createElement("li");

    wrapper.className =
      "md-tabs__item tsr-projects-dropdown";


    /* =======================================================
       BUTTON

       IMPORTANT:
       Do NOT add md-tabs__link here.
       Material must not treat this as a navigation link.
       ======================================================= */

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "tsr-projects-button";

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


    /* =======================================================
       MENU
       ======================================================= */

    const menu =
      document.createElement("div");

    menu.className =
      "tsr-projects-menu";

    menu.setAttribute(
      "role",
      "menu"
    );


    const base =
      getSiteBase();


    /* =======================================================
       PROJECT LINKS
       ======================================================= */

    projects.forEach(
      function (project) {

        const link =
          document.createElement("a");

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


    /* =======================================================
       BUILD
       ======================================================= */

    wrapper.appendChild(button);

    wrapper.appendChild(menu);

    projectsTab.replaceWith(wrapper);


    /* =======================================================
       BUTTON CLICK
       ======================================================= */

    button.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        event.stopPropagation();

        const isOpen =
          wrapper.classList.contains(
            "tsr-projects-open"
          );


        /* Close */

        closeMenu(wrapper);


        /* Open */

        if (!isOpen) {

          wrapper.classList.add(
            "tsr-projects-open"
          );

          button.setAttribute(
            "aria-expanded",
            "true"
          );

        }

      },
      true
    );


    /* =======================================================
       MENU LINK CLICK
       ======================================================= */

    menu
      .querySelectorAll(
        ".tsr-project-link"
      )
      .forEach(
        function (link) {

          link.addEventListener(
            "click",
            function () {

              closeMenu(wrapper);

            }
          );

        }
      );


    /* =======================================================
       OUTSIDE CLICK
       ======================================================= */

    document.addEventListener(
      "click",
      function (event) {

        if (
          !wrapper.contains(
            event.target
          )
        ) {

          closeMenu(wrapper);

        }

      },
      true
    );


    /* =======================================================
       ESCAPE
       ======================================================= */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape"
        ) {

          closeMenu(wrapper);

        }

      }
    );

  }


  /* =========================================================
     INITIALIZATION
     ========================================================= */

  function init() {

    setTimeout(
      createProjectsMenu,
      100
    );

  }


  /* =========================================================
     MATERIAL INSTANT NAVIGATION
     ========================================================= */

  if (
    typeof document$ !==
    "undefined"
  ) {

    document$.subscribe(
      function () {

        setTimeout(
          createProjectsMenu,
          100
        );

      }
    );

  } else {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  }

})();

/* =========================================================
   TSR PORTFOLIO
   CUSTOM PROJECTS DROPDOWN
   ========================================================= */

(function () {
  "use strict";

  const PROJECTS = [
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
     GET SITE ROOT
     ========================================================= */

  function getSiteRoot() {

    const siteUrl =
      document
        .querySelector('meta[name="site-url"]')
        ?.getAttribute("content");

    if (siteUrl) {
      return siteUrl.endsWith("/")
        ? siteUrl
        : siteUrl + "/";
    }

    const marker =
      "/healthcare-ba-ai-portfolio-/";

    const pathname =
      window.location.pathname;

    if (pathname.includes(marker)) {
      return (
        pathname.split(marker)[0] +
        marker
      );
    }

    return "/";
  }


  /* =========================================================
     CLOSE
     ========================================================= */

  function closeDropdown(wrapper) {

    if (!wrapper) return;

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
     OPEN
     ========================================================= */

  function openDropdown(wrapper) {

    if (!wrapper) return;

    wrapper.classList.add(
      "tsr-projects-open"
    );

    const button =
      wrapper.querySelector(
        ".tsr-projects-button"
      );

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "true"
      );
    }
  }


  /* =========================================================
     CREATE DROPDOWN
     ========================================================= */

  function createProjectsDropdown() {

    const tabsList =
      document.querySelector(
        ".md-tabs__list"
      );

    if (!tabsList) {
      return;
    }


    /*
     * Already created?
     */

    if (
      tabsList.querySelector(
        ".tsr-projects-dropdown"
      )
    ) {
      return;
    }


    /*
     * Find original Projects tab
     */

    const originalItems =
      Array.from(
        tabsList.querySelectorAll(
          ":scope > .md-tabs__item"
        )
      );

    const originalProjects =
      originalItems.find(
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


    if (!originalProjects) {

      console.warn(
        "TSR: Projects navigation item not found."
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
       ======================================================= */

    const button =
      document.createElement("button");

    button.type = "button";

    /*
     * IMPORTANT:
     * This must NOT contain md-tabs__link.
     */

    button.className =
      "tsr-projects-button";

    button.setAttribute(
      "aria-haspopup",
      "true"
    );

    button.setAttribute(
      "aria-expanded",
      "false"
    );

    button.setAttribute(
      "aria-label",
      "Open Projects menu"
    );

    button.innerHTML = `
      <span class="tsr-projects-label">
        Projects
      </span>

      <span
        class="tsr-projects-chevron"
        aria-hidden="true"
      >
        ▾
      </span>
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

    menu.setAttribute(
      "aria-hidden",
      "true"
    );


    const siteRoot =
      getSiteRoot();


    /* =======================================================
       PROJECT LINKS
       ======================================================= */

    PROJECTS.forEach(
      function (project) {

        const link =
          document.createElement("a");

        link.className =
          "tsr-project-link";

        link.href =
          siteRoot + project.path;

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
       ASSEMBLE
       ======================================================= */

    wrapper.appendChild(button);

    wrapper.appendChild(menu);


    /*
     * Replace ONLY the top navigation Projects tab.
     */

    originalProjects.replaceWith(
      wrapper
    );


    /* =======================================================
       BUTTON CLICK
       ======================================================= */

    button.onclick =
      function (event) {

        event.preventDefault();

        event.stopPropagation();

        const currentlyOpen =
          wrapper.classList.contains(
            "tsr-projects-open"
          );


        /*
         * Close every other TSR dropdown
         */

        document
          .querySelectorAll(
            ".tsr-projects-dropdown"
          )
          .forEach(
            function (item) {

              if (item !== wrapper) {
                closeDropdown(item);
              }

            }
          );


        if (currentlyOpen) {

          closeDropdown(wrapper);

          menu.setAttribute(
            "aria-hidden",
            "true"
          );

        } else {

          openDropdown(wrapper);

          menu.setAttribute(
            "aria-hidden",
            "false"
          );

        }

      };


    /* =======================================================
       PROJECT CLICK
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

              closeDropdown(
                wrapper
              );

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

          closeDropdown(
            wrapper
          );

          menu.setAttribute(
            "aria-hidden",
            "true"
          );

        }

      }
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

          closeDropdown(
            wrapper
          );

          menu.setAttribute(
            "aria-hidden",
            "true"
          );

        }

      }
    );


    console.log(
      "TSR Projects dropdown initialized."
    );
  }


  /* =========================================================
     INITIAL LOAD
     ========================================================= */

  function initialize() {

    setTimeout(
      createProjectsDropdown,
      100
    );

  }


  /* =========================================================
     MKDOCS MATERIAL INSTANT NAVIGATION
     ========================================================= */

  if (
    typeof document$ !==
    "undefined"
  ) {

    document$.subscribe(
      function () {

        setTimeout(
          createProjectsDropdown,
          100
        );

      }
    );

  } else {

    if (
      document.readyState ===
      "loading"
    ) {

      document.addEventListener(
        "DOMContentLoaded",
        initialize
      );

    } else {

      initialize();

    }

  }

})();

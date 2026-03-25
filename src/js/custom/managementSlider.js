(function () {
  function initManagementSliders(scope) {
    const $scope = scope ? $(scope) : $(document);

    $scope.find(".managementsSlider").each(function () {
      const $sliderWrapper = $(this);
      const $slider = $sliderWrapper.find(".managementsSlider-js");
      const $prev = $sliderWrapper.find(".managementsSlider__arrow--prev");
      const $next = $sliderWrapper.find(".managementsSlider__arrow--next");

      if (!$slider.length || $slider.hasClass("slick-initialized")) return;

      $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        prevArrow: $prev,
        nextArrow: $next,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.2,
            },
          },
          {
            breakpoint: 468,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  }

  function updateSliders(scope) {
    const $scope = scope ? $(scope) : $(document);

    $scope.find(".managementsSlider-js.slick-initialized").each(function () {
      $(this).slick("setPosition");
    });
  }

  initManagementSliders();

  const sections = document.querySelectorAll("[data-sections]");
  if (!sections.length) return;

  const openLabel = "Prohlédnout sekci";
  const closeLabel = "Minimalizovat sekci";

  sections.forEach(function (section) {
    const toggleButton = section.querySelector("[data-sections-toggle]");
    const content = section.querySelector("[data-sections-content]");

    if (!toggleButton || !content) return;

    let isAnimating = false;

    content.style.height = "0px";
    content.hidden = true;

    toggleButton.addEventListener("click", function () {
      if (isAnimating) return;

      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        collapse();
      } else {
        expand();
      }
    });

    function expand() {
      isAnimating = true;

      content.hidden = false;
      content.style.overflow = "hidden";

      initManagementSliders(content);
      updateSliders(content);

      const targetHeight = content.scrollHeight;

      content.classList.add("is-open");
      toggleButton.classList.add("is-open");
      toggleButton.setAttribute("aria-expanded", "true");
      toggleButton.textContent = closeLabel;

      content.style.height = targetHeight + "px";

      function onTransitionEnd(e) {
        if (e.propertyName !== "height") return;

        content.style.height = "auto";
        content.style.overflow = "visible";

        updateSliders(content);

        content.removeEventListener("transitionend", onTransitionEnd);
        isAnimating = false;
      }

      content.addEventListener("transitionend", onTransitionEnd);
    }

    function collapse() {
      isAnimating = true;

      const startHeight = content.scrollHeight;

      content.style.height = startHeight + "px";
      content.style.overflow = "hidden";

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          content.classList.remove("is-open");
          toggleButton.classList.remove("is-open");
          toggleButton.setAttribute("aria-expanded", "false");
          toggleButton.textContent = openLabel;

          content.style.height = "0px";
        });
      });

      function onTransitionEnd(e) {
        if (e.propertyName !== "height") return;

        content.hidden = true;
        content.removeEventListener("transitionend", onTransitionEnd);
        isAnimating = false;
      }

      content.addEventListener("transitionend", onTransitionEnd);
    }
  });

  window.addEventListener("resize", function () {
    updateSliders();

    document
      .querySelectorAll("[data-sections-content]")
      .forEach(function (content) {
        if (!content.hidden && content.style.height !== "auto") {
          content.style.height = content.scrollHeight + "px";
        }
      });
  });
})();

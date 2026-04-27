document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".bw-scroll-hero");
  const sticky = hero ? hero.querySelector(".bw-scroll-hero-sticky") : null;
  const frames = Array.from(document.querySelectorAll(".bw-anim-frame"));

  if (!hero || !sticky || frames.length === 0) return;

  let activeIndex = 0;
  let intervalId = null;
  let hasStarted = false;

  const frameDuration = 90;

  function setActiveFrame(index) {
    frames.forEach((frame, i) => {
      frame.classList.toggle("is-active", i === index);
    });

    activeIndex = index;
  }

  function startAnimation() {
    if (hasStarted) return;

    hasStarted = true;
    hero.classList.add("is-animating");

    setActiveFrame(0);

    intervalId = window.setInterval(function () {
      const nextIndex = activeIndex + 1;

      if (nextIndex >= frames.length) {
        window.clearInterval(intervalId);
        intervalId = null;
        return;
      }

      setActiveFrame(nextIndex);
    }, frameDuration);
  }

  function resetAnimation() {
    hasStarted = false;
    hero.classList.remove("is-animating");

    if (intervalId) {
      window.clearInterval(intervalId);
      intervalId = null;
    }

    setActiveFrame(0);
  }

  function checkTrigger() {
    const stickyRect = sticky.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();

    const stickyIsPinned = stickyRect.top <= 1;
    const heroStillActive = heroRect.bottom > window.innerHeight * 0.25;

    if (stickyIsPinned && heroStillActive) {
      startAnimation();
    } else if (stickyRect.top > 1) {
      resetAnimation();
    }
  }

  window.addEventListener("scroll", checkTrigger, { passive: true });
  window.addEventListener("resize", checkTrigger);

  checkTrigger();
});

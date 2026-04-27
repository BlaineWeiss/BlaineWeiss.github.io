document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".bw-scroll-hero");
  const frames = Array.from(document.querySelectorAll(".bw-anim-frame"));

  if (!hero || frames.length === 0) return;

  let activeIndex = 0;
  let intervalId = null;
  let hasStarted = false;

  const frameDuration = 5; // milliseconds per frame

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
    const rect = hero.getBoundingClientRect();

    /*
      Trigger when the top of the hero reaches about 25% down from
      the top of the viewport.
    */
    const triggerPoint = window.innerHeight * 0.5;

    const shouldAnimate =
      rect.top <= triggerPoint &&
      rect.bottom > window.innerHeight * 0.45;

    if (shouldAnimate) {
      startAnimation();
    } else if (rect.top > triggerPoint) {
      resetAnimation();
    }
  }

  window.addEventListener("scroll", checkTrigger, { passive: true });
  window.addEventListener("resize", checkTrigger);

  checkTrigger();
});

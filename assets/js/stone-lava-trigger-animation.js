document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".bw-scroll-hero");
  const sticky = hero ? hero.querySelector(".bw-scroll-hero-sticky") : null;
  const frames = Array.from(document.querySelectorAll(".bw-anim-frame"));

  if (!hero || !sticky || frames.length === 0) return;

  let activeIndex = 0;
  let intervalId = null;
  let hasStarted = false;

  const frameDuration = 333;

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
  const scrollableDistance = rect.height - window.innerHeight;

  if (scrollableDistance <= 0) return;

  const progress = Math.min(
    Math.max(-rect.top / scrollableDistance, 0),
    1
  );

  const shouldAnimate =
    progress >= 0.15 &&
    rect.bottom > window.innerHeight * 0.25;

  if (shouldAnimate) {
    startAnimation();
  } else if (progress < 0.15) {
    resetAnimation();
  }
}

  window.addEventListener("scroll", checkTrigger, { passive: true });
  window.addEventListener("resize", checkTrigger);

  checkTrigger();
});

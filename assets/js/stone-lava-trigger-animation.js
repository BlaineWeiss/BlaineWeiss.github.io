document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".bw-scroll-hero");
  const sticky = hero ? hero.querySelector(".bw-scroll-hero-sticky") : null;
  const frames = Array.from(document.querySelectorAll(".bw-anim-frame"));

  if (!hero || !sticky || frames.length === 0) return;

  let activeIndex = 0;
  let intervalId = null;
  let hasStarted = false;

  const frameDuration =  200;

 function setActiveFrame(nextIndex) {
  if (nextIndex === activeIndex) return;

  const currentFrame = frames[activeIndex];
  const nextFrame = frames[nextIndex];

  /*
    Put the next frame above the current frame and fade it in.
    The old frame remains fully visible underneath, preventing a dark flash.
  */
  nextFrame.classList.add("is-entering");

  window.setTimeout(function () {
    currentFrame.classList.remove("is-current");
    nextFrame.classList.remove("is-entering");
    nextFrame.classList.add("is-current");

    activeIndex = nextIndex;
  }, 200);
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

  frames.forEach((frame, i) => {
    frame.classList.remove("is-current", "is-entering");
    if (i === 0) {
      frame.classList.add("is-current");
    }
  });

  activeIndex = 0;
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
    progress >= 0.5 &&
    rect.bottom > window.innerHeight * 0.25;

  if (shouldAnimate) {
    startAnimation();
  } else if (progress < 0.5) {
    resetAnimation();
  }
}

  window.addEventListener("scroll", checkTrigger, { passive: true });
  window.addEventListener("resize", checkTrigger);

  checkTrigger();
});

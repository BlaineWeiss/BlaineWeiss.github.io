document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".bw-scroll-hero");
  const sticky = hero ? hero.querySelector(".bw-scroll-hero-sticky") : null;
  const frames = Array.from(document.querySelectorAll(".bw-anim-frame"));

  if (!hero || !sticky || frames.length === 0) return;

  let activeIndex = 0;
  let intervalId = null;
  let hasStarted = false;
  let isTransitioning = false;
  let transitionTimeoutId = null;

  /*
    Must match your CSS opacity transition duration:
    transition: opacity 1000ms linear;
  */
  const fadeDuration = 1000;

  /*
    Time between the start of one frame transition and the next.
    This MUST be longer than fadeDuration.
  */
  const frameDuration = 2200;

  /*
    Animation starts when the user has scrolled this far into
    the scroll hero section.

    Higher = starts later.
    Lower = starts earlier.
  */
  const triggerProgress = 0.5;

  function resetFrameStack() {
    frames.forEach(function (frame, i) {
      frame.classList.remove("is-current", "is-entering");
      frame.style.zIndex = "0";

      if (i === 0) {
        frame.classList.add("is-current");
        frame.style.zIndex = "1";
      }
    });

    activeIndex = 0;
    isTransitioning = false;
  }

  function setActiveFrame(nextIndex) {
    if (nextIndex === activeIndex) return;
    if (isTransitioning) return;
    if (nextIndex < 0 || nextIndex >= frames.length) return;

    isTransitioning = true;

    const currentFrame = frames[activeIndex];
    const nextFrame = frames[nextIndex];

    /*
      Clear any old entering states, but do NOT remove is-current
      from the current frame yet. The current frame must remain visible
      underneath the new one during the fade.
    */
    frames.forEach(function (frame) {
      frame.classList.remove("is-entering");
      frame.style.zIndex = "0";
    });

    currentFrame.classList.add("is-current");
    currentFrame.style.zIndex = "1";

    /*
      Put the new frame above the current one. Its CSS opacity transition
      will fade it from 0 to 1.
    */
    nextFrame.classList.add("is-entering");
    nextFrame.style.zIndex = "2";

    if (transitionTimeoutId) {
      window.clearTimeout(transitionTimeoutId);
    }

    transitionTimeoutId = window.setTimeout(function () {
      currentFrame.classList.remove("is-current");
      currentFrame.style.zIndex = "0";

      nextFrame.classList.remove("is-entering");
      nextFrame.classList.add("is-current");
      nextFrame.style.zIndex = "1";

      activeIndex = nextIndex;
      isTransitioning = false;
      transitionTimeoutId = null;
    }, fadeDuration);
  }

  function startAnimation() {
    if (hasStarted) return;

    hasStarted = true;
    hero.classList.add("is-animating");

    resetFrameStack();

    intervalId = window.setInterval(function () {
      if (isTransitioning) return;

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

    if (transitionTimeoutId) {
      window.clearTimeout(transitionTimeoutId);
      transitionTimeoutId = null;
    }

    resetFrameStack();
  }

  function checkTrigger() {
    const rect = hero.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;

    if (scrollableDistance <= 0) return;

    const progress = Math.min(
      Math.max(-rect.top / scrollableDistance, 0),
      1
    );

    const heroStillActive = rect.bottom > window.innerHeight * 0.25;

    if (progress >= triggerProgress && heroStillActive) {
      startAnimation();
    } else if (progress < triggerProgress) {
      resetAnimation();
    }
  }

  window.addEventListener("scroll", checkTrigger, { passive: true });
  window.addEventListener("resize", checkTrigger);

  resetFrameStack();
  checkTrigger();
});

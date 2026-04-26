document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".bw-scroll-gallery");

  if (!gallery) {
    return;
  }

  const slides = gallery.querySelectorAll(".bw-gallery-slide");
  let currentSlide = 0;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          gallery.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.35
    }
  );

  observer.observe(gallery);

  if (slides.length > 1) {
    setInterval(function () {
      slides[currentSlide].classList.remove("is-active");

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.add("is-active");
    }, 3500);
  }
});

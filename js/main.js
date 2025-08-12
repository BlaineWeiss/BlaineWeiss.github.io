// main.js
// Handles dark/light mode toggle and initialises a simple 3D placeholder
// using Three.js. When you have your own GLTF/OBJ models, replace the
// geometry/material below with a loader (e.g. GLTFLoader) and add your
// model to the scene.

(() => {
  // Utility: update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Theme handling
  const root = document.documentElement; // <html> element
  const toggleBtn = document.querySelector('#mode-toggle, #theme-toggle');

  /**
   * Apply the given theme by toggling the `dark` class on <html>.
   * @param {string} theme 'dark' or 'light'
   */
  function applyTheme(theme) {
    const isDark = theme === 'dark';
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  /**
   * Update the toggle button icon based on the current theme.
   */
  function updateIcon() {
    if (!toggleBtn) return;
    const isDark = root.classList.contains('dark');
    // Use sun for dark mode (to switch to light), moon for light mode (to switch to dark)
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
  }

  // Read initial theme from localStorage (this runs after the inline pre-paint script)
  const storedTheme = (() => {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  })();
  if (storedTheme === 'dark' || storedTheme === 'light') {
    applyTheme(storedTheme);
  }
  // Update icon on load
  updateIcon();

  // Toggle handler
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentlyDark = root.classList.contains('dark');
      const nextTheme = currentlyDark ? 'light' : 'dark';
      applyTheme(nextTheme);
      try {
        localStorage.setItem('theme', nextTheme);
      } catch (e) {
        // localStorage might be unavailable in privacy mode; ignore
      }
      updateIcon();
    });
  }

  // Note: 3D placeholder using Three.js has been removed because external
  // scripts cannot be loaded in this environment. The homepage now uses a
  // CSS‑based rotating cube as a placeholder (see index.html and style.css).
  // When deploying on your own server, you can include Three.js and your
  // 3D models here to create a richer 3D experience.
})();
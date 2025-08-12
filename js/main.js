// main.js
(function () {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Apply theme helper
  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }

  // Read saved and apply (in case head script was missed)
  try {
    const saved = localStorage.getItem('theme');
    if (saved) applyTheme(saved);
  } catch (_){}

  // Toggle button (support either id)
  const btn = document.querySelector('#theme-toggle, #mode-toggle');
  function refreshIcon() {
    if (!btn) return;
    const dark = document.documentElement.classList.contains('dark');
    btn.textContent = dark ? '☀️' : '🌙';
  }
  if (btn) {
    btn.addEventListener('click', () => {
      const dark = document.documentElement.classList.contains('dark');
      const next = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', next); } catch(_){}
      applyTheme(next);
      refreshIcon();
    });
    refreshIcon();
  }

  // Keep multiple tabs in sync (optional)
  window.addEventListener('storage', (e) => {
    if (e.key === 'theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
      applyTheme(e.newValue);
      refreshIcon();
    }
  });
})();

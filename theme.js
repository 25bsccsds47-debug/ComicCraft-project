(() => {
  const root = document.documentElement;
  const storageKey = 'comiccraft-theme';
  const savedTheme = localStorage.getItem(storageKey);
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  function applyTheme(theme) {
    root.dataset.theme = theme;
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      const isLight = theme === 'light';
      button.textContent = isLight ? 'Dark mode' : 'Light mode';
      button.setAttribute('aria-pressed', String(isLight));
      button.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    });
  }

  applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredTheme);
  document.querySelectorAll('.theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem(storageKey, theme);
      applyTheme(theme);
    });
  });
})();

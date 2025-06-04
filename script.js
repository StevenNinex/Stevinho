document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('toggle-mode');
  const body = document.body;

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    toggle.textContent = body.classList.contains('dark')
      ? '☀ Modo Claro'
      : '🌙 Modo Oscuro';
  });
});
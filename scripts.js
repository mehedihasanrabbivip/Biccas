    // Toggle mobile nav
    document.getElementById("menu-toggle").addEventListener("click", () => {
      document.getElementById("mobile-menu").classList.toggle("hidden");
    });

// dark mode

const darkToggle = document.getElementById('dark-toggle');
const html = document.documentElement;

// Step 1: Load saved theme on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  html.classList.add('dark');
} else if (savedTheme === 'light') {
  html.classList.remove('dark');
} else {
  // First time or not set: use system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

// Step 2: Toggle button click
darkToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
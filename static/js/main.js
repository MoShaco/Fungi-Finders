const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded');

  navToggle.setAttribute('aria-expanded', isExpanded === 'true' ? 'false' : 'true');
});

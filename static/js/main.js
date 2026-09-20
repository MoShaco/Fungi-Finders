const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded');

  navToggle.setAttribute('aria-expanded', isExpanded === 'true' ? 'false' : 'true');
});

const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add('resizing');

  requestAnimationFrame(() => {
    document.body.classList.remove('resizing');
  });
});

resizeObserver.observe(document.body);

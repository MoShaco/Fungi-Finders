const seasonFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');
const cards = document.querySelectorAll('.mushroom-guide .card');
const noResultMessage = document.querySelector('.no-match');

const currentFilters = {
  season: 'all',
  edible: 'all',
};

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `card-${mushroomId}`;
});

seasonFilter.addEventListener('change', updateFilters);
edibleFilter.addEventListener('change', updateFilters);

enableFiltering();

function updateFilters(event) {
  const filterType = event.target.name;
  currentFilters[filterType] = event.target.value;
  if (document.startViewTransition()) {
    document.startViewTransition(() => filterCards());
    return;
  }
  filterCards();
}

function filterCards(event) {
  let hasVisibleCard = false;
  cards.forEach((card) => {
    const season = card.querySelector('[data-season]').dataset.season;
    const edible = card.querySelector('[data-edible]').dataset.edible;
    const seasonMatch = currentFilters.season === season || currentFilters.season === 'all';
    const edibleMatch = currentFilters.edible === edible || currentFilters.edible === 'all';

    if (seasonMatch && edibleMatch) {
      card.hidden = false;
      hasVisibleCard = true;
    } else {
      card.hidden = true;
    }
  });

  noResultMessage.hidden = hasVisibleCard;
}

function enableFiltering() {
  seasonFilter.hidden = false;
  edibleFilter.hidden = false;
}

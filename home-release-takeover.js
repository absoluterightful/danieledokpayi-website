(() => {
  const releaseTime = Date.UTC(2026, 6, 31, 4, 0, 0);
  const localPreview =
    (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') &&
    new URLSearchParams(window.location.search).get('release-preview') === '1';

  function applyTakeover() {
    if (!localPreview && Date.now() < releaseTime) return;

    const hero = document.querySelector('[data-assurance-takeover]');
    if (!hero || hero.dataset.takeoverComplete === 'true') return;

    hero.dataset.takeoverComplete = 'true';
    hero.classList.add('assurance-takeover');

    const eyebrow = hero.querySelector('[data-takeover-eyebrow]');
    const title = hero.querySelector('[data-takeover-title]');
    const copy = hero.querySelector('[data-takeover-copy]');
    const actions = hero.querySelector('[data-takeover-actions]');

    if (eyebrow) eyebrow.textContent = 'New Single - Out Now';
    if (title) title.textContent = 'Assurance';
    if (copy) {
      copy.textContent =
        'An Afrobeat song about faith, steady peace, and knowing that God is with you when life gets noisy.';
    }
    if (actions) {
      actions.innerHTML =
        '<a class="btn btn-primary" href="/assurance" onclick="trackClick(\'Listen to Assurance - Release Takeover\')">Listen Now!!</a>' +
        '<a class="btn btn-outline" href="/assurance-story#meaning" onclick="trackClick(\'Assurance Story - Release Takeover\')">Read the Story</a>' +
        '<a class="btn btn-outline" href="/music" onclick="trackClick(\'Music Catalog - Release Takeover\')">Music Catalog</a>';
    }

    document.title = 'Assurance Out Now | Daniel Edokpayi';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTakeover);
  } else {
    applyTakeover();
  }

  window.setInterval(applyTakeover, 60000);
})();

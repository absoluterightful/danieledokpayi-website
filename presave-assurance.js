(() => {
  const releaseTime = Date.UTC(2026, 6, 31, 4, 0, 0);
  const presaveUrl = 'https://distrokid.com/hyperfollow/danieledokpayi/assurance?ref=release';
  const releaseUrl = 'https://open.spotify.com/track/5H2hhupOkNK1DTiarbqkYm';

  function initPresave() {
    const button = document.querySelector('[data-presave-button]');
    const heading = document.querySelector('[data-presave-heading]');
    const description = document.querySelector('[data-presave-description]');
    const trust = document.querySelector('[data-presave-trust]');
    if (!button) return;

    if (Date.now() >= releaseTime) {
      button.href = releaseUrl;
      button.querySelector('span').textContent = 'Listen on Spotify';
      if (heading) heading.textContent = 'Assurance is out now.';
      if (description) description.textContent = 'The new single from Daniel Edokpayi is ready to stream.';
      if (trust) trust.textContent = 'Listen on Daniel Edokpayi\'s official Spotify artist page.';
    } else {
      button.href = presaveUrl;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPresave);
  } else {
    initPresave();
  }
})();

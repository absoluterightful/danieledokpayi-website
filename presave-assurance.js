(() => {
  const releaseTime = Date.UTC(2026, 6, 31, 4, 0, 0);
  const presaveUrl = 'https://danieledokpayi.lnk.to/5kz9CB';

  function initPresave() {
    const button = document.querySelector('[data-presave-button]');
    const heading = document.querySelector('[data-presave-heading]');
    const description = document.querySelector('[data-presave-description]');
    const trust = document.querySelector('[data-presave-trust]');
    if (!button) return;

    if (Date.now() >= releaseTime) {
      button.href = presaveUrl;
      button.querySelector('span').textContent = 'Listen Now!!';
      if (heading) heading.textContent = 'Assurance is out now.';
      if (description) description.textContent = 'The new single from Daniel Edokpayi is ready to stream.';
      if (trust) trust.textContent = 'Choose your streaming service on the official Assurance release page.';
      document.title = 'Listen to Assurance | Daniel Edokpayi';
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

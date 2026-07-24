(() => {
  function initShareButton() {
    const button = document.querySelector('[data-share-assurance]');
    const status = document.querySelector('[data-share-status]');
    if (!button) return;

    button.addEventListener('click', async () => {
      const shareData = {
        title: 'Assurance by Daniel Edokpayi',
        text: 'Listen to Assurance by Daniel Edokpayi.',
        url: 'https://www.danieledokpayi.com/assurance'
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
          if (status) status.textContent = 'Thanks for sharing Assurance.';
          return;
        }

        await navigator.clipboard.writeText(shareData.url);
        if (status) status.textContent = 'Assurance link copied.';
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        if (status) status.textContent = 'Open the page menu to copy and share this link.';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShareButton);
  } else {
    initShareButton();
  }
})();

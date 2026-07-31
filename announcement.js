(() => {
  const releaseTime = Date.UTC(2026, 6, 31, 4, 0, 0);
  const assurancePage = '/assurance#listen';
  let announcementText;
  let announcementLink;

  function isReleased() {
    return Date.now() >= releaseTime;
  }

  function getMessage() {
    return isReleased() ? 'Assurance Out Now!!' : 'Assurance Coming Soon';
  }

  function removeAnnouncement() {
    const bar = document.querySelector('.announcement-bar');
    if (bar) bar.remove();
    document.documentElement.classList.remove('has-announcement');
    announcementText = null;
    announcementLink = null;
  }

  function updateMessage() {
    if (!isReleased()) {
      if (announcementText) announcementText.textContent = getMessage();
      if (announcementLink) announcementLink.href = assurancePage;
      return;
    }

    removeAnnouncement();

    document.querySelectorAll('[data-assurance-action]').forEach((action) => {
      action.textContent = action.getAttribute('data-released-label') || 'Listen Now!!';
      action.setAttribute('href', action.getAttribute('data-released-href') || assurancePage);
    });

    document.querySelectorAll('[data-assurance-release-label]').forEach((label) => {
      label.textContent = label.getAttribute('data-released-label') || 'Single \u2022 Out Now';
    });

    document.querySelectorAll('[data-assurance-out-text]').forEach((element) => {
      element.textContent = element.getAttribute('data-assurance-out-text');
    });
  }

  function renderAnnouncement() {
    const nav = document.querySelector('.nav');
    if (!nav || document.querySelector('.announcement-bar')) return;
    if (isReleased()) {
      updateMessage();
      return;
    }

    const bar = document.createElement('aside');
    bar.className = 'announcement-bar';
    bar.setAttribute('aria-label', 'Release announcement');

    const link = document.createElement('a');
    link.className = 'announcement-message';
    announcementLink = link;

    announcementText = document.createElement('span');
    updateMessage();
    link.appendChild(announcementText);
    bar.appendChild(link);
    nav.insertAdjacentElement('afterend', bar);
    document.documentElement.classList.add('has-announcement');
    updateMessage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAnnouncement);
  } else {
    renderAnnouncement();
  }

  window.setInterval(updateMessage, 60000);
})();

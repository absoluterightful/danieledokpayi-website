(() => {
  const releaseTime = Date.UTC(2026, 6, 31, 4, 0, 0);
  let announcementText;
  let announcementLink;

  function getMessage() {
    return Date.now() >= releaseTime ? 'Assurance Out Now!!' : 'Assurance Coming Soon';
  }

  function updateMessage() {
    if (announcementText) announcementText.textContent = getMessage();
    if (announcementLink) announcementLink.href = Date.now() >= releaseTime ? '/assurance' : '/presave-assurance';
  }

  function renderAnnouncement() {
    const nav = document.querySelector('.nav');
    if (!nav || document.querySelector('.announcement-bar')) return;

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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAnnouncement);
  } else {
    renderAnnouncement();
  }

  window.setInterval(updateMessage, 60000);
})();

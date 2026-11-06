// UNDRGND2 — the site's name and its About text for undrgnd2.eu.
// Loaded before th0mk's page script (one line in index.html); it only replaces the title and the About tab,
// so his files stay untouched and his updates merge without conflicts.
(() => {
  const NAME = 'UNDRGND2';
  const PORT = '<a href="https://github.com/th0mk/nfsu2-web" target="_blank" rel="noopener noreferrer">nfsu2-web</a>';
  const ABOUT = {
    en: [
      'UNDRGND2 is a community server for Need for Speed: Underground 2, played right in your browser: free roam and Online races with players from all over the world.',
      `The browser port is th0mk's work (${PORT}). This server runs it and follows its updates; all the credit for it goes to him.`,
      'Rights holders: undrgnd2.contact (at) gmail.com.',
    ],
    fr: [
      "UNDRGND2 est un serveur communautaire de Need for Speed: Underground 2, jouable directement dans le navigateur : exploration libre et courses en ligne avec des joueurs du monde entier.",
      `Le portage navigateur est l'œuvre de th0mk (${PORT}). Ce serveur le fait tourner et suit ses mises à jour ; tout le mérite lui revient.`,
      'Ayants droit : undrgnd2.contact (at) gmail.com.',
    ],
  };

  document.title = NAME;

  function title() {
    const h1 = document.querySelector('.brand h1');
    if (h1 && !h1.querySelector('.u2-two')) h1.innerHTML = 'UNDRGND<span class="u2-two">2</span>';
  }

  function about() {
    const pane = document.querySelector('#about .pane[data-tab="about"]');
    if (!pane) return;
    const lang = (document.documentElement.lang || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
    if (pane.dataset.u2 === lang) return;
    pane.dataset.u2 = lang;
    pane.innerHTML = ABOUT[lang].map(t => `<p>${t}</p>`).join('');
  }

  // the header's Discord button: our community's server
  const DISCORD = 'https://discord.gg/E2WSDb8z5U';
  function discord() {
    for (const a of document.querySelectorAll('.top-end a.btn[href*="discord.gg"]')) a.href = DISCORD;
  }

  function apply() { title(); about(); discord(); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
  // the page's language list sets <html lang>: the About text follows it
  new MutationObserver(about).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();

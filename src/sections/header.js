export function renderHeader() {
  return `
<header class="navbar">
  <div class="logo"><a href="/" style="text-decoration:none;color:inherit;">WASAM CHAUDHRY</a></div>
  <nav class="nav-links" id="nav-links">
    <a href="#about">About</a>
    <a href="#companies">Companies</a>
    <a href="#media">Media</a>
    <a href="#network">Global Network</a>
    <a href="#lifestyle">Lifestyle</a>
    <a href="#contact" class="btn-gold-outline">Inquire</a>
  </nav>
  <button class="menu-toggle" id="mobile-menu" aria-label="Open navigation menu" aria-expanded="false" type="button">
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
</header>
`;
}

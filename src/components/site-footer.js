import siteData from "../data/site-data";

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const { copyright, githubRepo, githubLabel } = siteData.footer;

    this.innerHTML = `
      <footer class="pb-5 text-white md:text-center lg:pb-8">
        <p
          class="footer-pill"
        >
          ${copyright}
          <a
            href="${githubRepo}"
            class="text-slate-700 underline transition-colors duration-300 hover:text-slate-950"
            >${githubLabel}</a
          >
        </p>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);

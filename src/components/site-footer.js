class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="pb-5 text-white md:text-center lg:pb-8">
        <p
          class="contact-button bg-slate-500 py-1.5 text-xs lg:py-3 lg:text-base"
        >
          &copy; 2026 Hilman Fikry | The code for this website is open source.
          <a
            href="https://github.com/gofhilman/homepage"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-200 underline"
            >View on Github</a
          >
        </p>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);

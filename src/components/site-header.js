import HeaderTyping from "../modules/header-typing";
import siteData from "../data/site-data";

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const { title, navLinks } = siteData.header;

    this.innerHTML = `
      <header
        class="progress-bar fixed inset-x-0 top-0 z-1 flex items-center justify-between bg-white/20 px-[10px] py-[20px] backdrop-blur-sm lg:px-[50px] lg:py-[18px]"
      >
        <h1
          class="mr-3 text-base font-semibold whitespace-nowrap lg:mr-10 lg:text-3xl"
        >
          <a href="/">
            <pre class="font-sans">&lt; <span id="head-typing"></span
              ><span id="head-cursor"></span> /&gt;</pre>
          </a>
        </h1>
        <nav>
          <ul
            class="flex items-center justify-center gap-x-2 text-sm font-medium lg:gap-x-5 lg:text-2xl"
          >
            ${navLinks
              .map(
                (link) => `
              <li><a href="${link.url}">${link.label}</a></li>
            `,
              )
              .join("")}
          </ul>
        </nav>
      </header>
    `;

    const headerTyping = new HeaderTyping(title);
    const headTypingEl = this.querySelector("#head-typing");
    const headCursorEl = this.querySelector("#head-cursor");

    this.typingInterval = setInterval(() => {
      headerTyping.type();
      if (headTypingEl) headTypingEl.textContent = headerTyping.typedString;
      if (headCursorEl) headCursorEl.textContent = headerTyping.cursor;
    }, 120);
  }

  disconnectedCallback() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }
}

customElements.define("site-header", SiteHeader);

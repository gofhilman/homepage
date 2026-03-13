import IntroTyping from "../modules/intro-typing";
import heroData from "../data/hero-data";

class HeroSection extends HTMLElement {
  connectedCallback() {
    const {
      greeting,
      name,
      typingStrings,
      bio,
      profileImage,
      profileAlt,
      contactCta,
      contactLink,
    } = heroData;

    this.innerHTML = `
      <section
        class="grid min-h-[calc(100vh-35px)] items-start gap-x-[40px] px-[20px] pb-35 xl:min-h-[calc(100vh-100px)] xl:grid-flow-col xl:grid-cols-[2fr_1fr] xl:grid-rows-2 xl:px-[150px] xl:pb-0"
        id="about"
      >
        <h2 class="flex flex-col self-center">
          <span>${greeting}</span>
          <span>${name}</span>
          <span
            ><span>a </span><span id="typing"></span><span id="cursor"></span
          ></span>
        </h2>
        <p
          class="my-10 border-l-10 border-slate-500 px-10 py-5 text-base/normal lg:text-lg/normal xl:mr-30 xl:text-xl/normal"
        >
          ${bio}
        </p>
        <div
          class="flex flex-col items-center gap-[80px] justify-self-center xl:row-span-full xl:mt-[130px] xl:gap-[100px]"
        >
          <div class="relative">
            <img
              src="${profileImage}"
              alt="${profileAlt}"
              class="max-w-[200px] rounded-sm xl:max-w-[300px]"
            />
            <div
              class="shadowing absolute top-5 left-5 -z-1 size-full rounded-sm bg-slate-500"
            ></div>
          </div>
          <nav>
            <a
              class="contact-button block bg-slate-500 text-xl font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-600 xl:text-3xl"
              href="${contactLink}"
              >${contactCta}</a
            >
          </nav>
        </div>
      </section>
    `;

    const introTyping = new IntroTyping(typingStrings, 40);
    const typingEl = this.querySelector("#typing");
    const cursorEl = this.querySelector("#cursor");

    this.typingInterval = setInterval(() => {
      introTyping.type();
      if (typingEl) typingEl.textContent = introTyping.typedString;
      if (cursorEl) cursorEl.textContent = introTyping.cursor;
    }, 100);
  }

  disconnectedCallback() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }
}

customElements.define("hero-section", HeroSection);

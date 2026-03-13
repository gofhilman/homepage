class SkillItem extends HTMLElement {
  connectedCallback() {
    // If the component has children (e.g., initialized directly in HTML), do not overwrite immediately.
    // In our case, we will pass 'src' and 'name' attributes.
    const src = this.getAttribute("src") || "";
    const name = this.getAttribute("name") || "";

    this.innerHTML = `
      <figure>
        <img src="${src}" alt="${name}" />
        <figcaption>${name}</figcaption>
      </figure>
    `;
  }
}

customElements.define("skill-item", SkillItem);

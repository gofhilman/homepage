import skillsData from "../data/skills-data";

class SkillsSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const { description, categories } = skillsData;

    const renderSkills = (skillsArray) => {
      return skillsArray
        .map(
          (skill) =>
            `<skill-item src="${skill.src}" name="${skill.name}"></skill-item>`,
        )
        .join("");
    };

    this.innerHTML = `
      <section class="separator pb-20" id="skills">
        <h2>Skills</h2>
        <p class="mx-10 mt-6 border-l-4 border-slate-500 py-1 pl-5 text-base lg:mx-30 lg:text-xl">
          ${description}
        </p>
        ${categories
          .map(
            (category) => `
          <h3>${category.title}</h3>
          <div>
            ${renderSkills(category.skills)}
          </div>
        `,
          )
          .join("")}
      </section>
    `;
  }
}

customElements.define("skills-section", SkillsSection);

class IntroTyping {
  constructor(list, waitDuration) {
    this.list = list;
    this.waitDuration = waitDuration;
    this.listIndex = 1;
    this.backward = false;
    this.charIndex = 0;
    this.waitTime = 0;
    this.typedString = "";
    this.cursor = "|";
  }

  type() {
    if (
      !this.backward &&
      this.charIndex === this.list[this.listIndex - 1].length &&
      this.waitTime !== this.waitDuration
    ) {
      this.waitTime++;
      if (this.waitTime % 5 === 0) {
        this.cursor = this.cursor ? "" : "|";
      }
    } else {
      if (
        this.listIndex === this.list.length &&
        this.backward &&
        this.charIndex === 0
      ) {
        this.listIndex = 1;
      } else if (this.backward && this.charIndex === 0) {
        this.listIndex++;
      }
      if (this.waitTime === this.waitDuration) {
        this.waitTime = 0;
        this.backward = true;
        this.cursor = "|";
      } else if (this.backward && this.charIndex === 0) {
        this.backward = false;
      }
      this.charIndex = this.backward ? this.charIndex - 1 : this.charIndex + 1;
      this.typedString = this.list[this.listIndex - 1].slice(0, this.charIndex);
    }
  }
}

const introTyping = new IntroTyping(
  [
    "Software Engineer.",
    "Fullstack Developer.",
    "Web Developer.",
    "Problem Solver.",
  ],
  40,
);

export default introTyping;

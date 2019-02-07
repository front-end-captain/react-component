import message from "./../index.js";

describe("<Message />", () => {
  it("should be correctly set `top` option", () => {
    message.config({ top: 100 });

    message.info("whatever");

    setTimeout(() => {
      expect(document.querySelectorAll(".sky-message")[0].getBoundingClientRect().top).toBe(100);
    }, 0);
  });
});

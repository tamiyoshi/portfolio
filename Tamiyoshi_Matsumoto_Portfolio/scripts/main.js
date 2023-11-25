// spanで囲む為の記述
const circleElement = document.querySelector(".circle_text");
const splitTexts = circleElement.textContent.split("");

let outputText = "";
splitTexts.forEach(
  (s, i) =>
    (outputText +=
      s === "  " ? "  " : `<span style="--number: ${i + 1}">${s}</span>`)
);
circleElement.innerHTML = outputText;
//
//
//
//
//
// トップページ戻りボタン
const ioDom = document.querySelector("#skill");
const pageTopBtn = document.querySelector("#page_top");

const options = {
  root: null,
  rootMargin: "800px",
};

const cb = function (entries) {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      // 監視中
      pageTopBtn.classList.remove("hidden");
    } else {
      // 監視外
      pageTopBtn.classList.add("hidden");
    }
  });
};

const io = new IntersectionObserver(cb, options);

io.observe(ioDom);

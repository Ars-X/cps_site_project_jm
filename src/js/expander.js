let articleBtn = "Читать далее";
let sectionBtn = "Показать все";
let expandedBtnInner = "Скрыть";

const expander = (btn) => {
  let targetClass = "." + btn.getAttribute("data-expander") + "__list",
    targetActiveClass = targetClass.substring(1) + "--expanded";

  document.querySelector(targetClass).classList.toggle(targetActiveClass);
  btn.classList.toggle("btn-read-more--active");
};

const innerChanger = (btn, inner) => {
  if (btn.textContent === inner) {
    btn.textContent = expandedBtnInner;
  } else {
    btn.textContent = inner;
  }
};

document.addEventListener("click", function (event) {
  let target = event.target;

  switch (target.getAttribute("data-expander")) {
    case "article":
      expander(target);
      innerChanger(target, articleBtn);
      break;

    case "brands":
      expander(target);
      innerChanger(target, sectionBtn);
      break;

    case "equipment":
      expander(target);
      innerChanger(target, sectionBtn);
      break;
  }
});

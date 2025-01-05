const elements = document.querySelectorAll(".project .number");
console.log(elements);

const animationCounter = (element, target) => {
  let step = target / 50;
  let current = 0;

  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target;

      clearInterval(interval);
    } else {
      element.textContent = Math.ceil(current);
    }
  }, 50);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animationCounter(entry.target, entry.target.dataset.num);
      }
    });
  },
  { threshold: 0.5 }
);

elements.forEach((element) => {
  observer.observe(element);
});

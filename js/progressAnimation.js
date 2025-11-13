document.addEventListener("DOMContentLoaded", () => {
  const numberElement = document.querySelector(
    ".course__progress-label .course__number"
  );
  const progressElement = document.querySelector(
    ".course__progress-element progress"
  );

  if (!numberElement || !progressElement) return;

  let animated = false;

  const randomTarget = Math.floor(350000 + Math.random() * (600000 - 350000));
  const duration = 2000;

  function animateProgress() {
    const start = performance.now();

    const startValue = 0;
    const endValue = randomTarget;
    const maxValue = 1000000;

    function frame(time) {
      const progress = Math.min((time - start) / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        startValue + (endValue - startValue) * ease
      );
      numberElement.textContent = currentValue.toLocaleString("ru-RU") + "₽";
      progressElement.value = (currentValue / maxValue) * maxValue;

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  function checkInViewport() {
    if (animated) return;

    const rect = progressElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const topThird = windowHeight / 3;
    const bottomThird = (windowHeight / 3) * 2;

    const elementCenter = rect.top + rect.height / 2;

    if (elementCenter >= topThird && elementCenter <= bottomThird) {
      animated = true;
      animateProgress();
      window.removeEventListener("scroll", checkInViewport);
    }
  }

  numberElement.textContent = "0₽";
  progressElement.value = 0;

  window.addEventListener("scroll", checkInViewport);
  checkInViewport();
});

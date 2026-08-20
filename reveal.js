document.addEventListener('DOMContentLoaded', function () {
  var elemente = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    elemente.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var beobachter = new IntersectionObserver(function (eintraege) {
    eintraege.forEach(function (eintrag) {
      if (eintrag.isIntersecting) {
        eintrag.target.classList.add('visible');
        beobachter.unobserve(eintrag.target);
      }
    });
  }, { threshold: 0.15 });

  elemente.forEach(function (el) { beobachter.observe(el); });
});

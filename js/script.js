// SLIDE JS
if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    time: 3000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: 'portfolio',
    time: 5000,
    nav: true,
  });
}

// if (window.matchMedia('(hover: none)').matches) {
  const images = document.getElementsByTagName('img');
  const changeFrom = window.innerHeight / 2; 

  // 1/4 on top grey, 1/4 on bottom grey, 1/2 in the middle color

  function mustBeColored(elem) {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    if (rect.height < changeFrom) {
      const half = (changeFrom - rect.height) / 2;
      elemTop = rect.top - half;
      elemBottom = rect.bottom + half;
    }

    var isColored = elemTop <= changeFrom && elemBottom > changeFrom;

    return isColored;
  }

  function filterColorOnImages() {
    [].forEach.call(images, function (image) {
      if (mustBeColored(image)) {
        image.classList.add('contact-color');
        // image.classList.remove('contact-gray');
      } else {
        // image.classList.add('contact-gray');
        image.classList.remove('contact-color');
      }
    });
  }

  filterColorOnImages();

  window.addEventListener('scroll', filterColorOnImages());
// }
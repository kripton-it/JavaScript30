const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  const returnFunc = (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
  return returnFunc;
};

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = () => {
  sliderImages.forEach((sliderImage) => {
    // определяем координату середины каждого изображения по высоте,
    // для определения момента добавления/удаления класса
    const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
    // определяем нижнюю координату изображения
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', debounce(checkSlide));

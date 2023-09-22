
export const createCarousel = (elements: HTMLElement[]) => {
  const slide = (event: MouseEvent) => {
    const target = event.target as any;
    const offset = target?.dataset.carouselButton === "next" ? 1 : -1;
    const slides = target?.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;

    delete activeSlide.dataset.active;
  };
  // Create the div element with the "carousel" class and "data-carousel" attribute
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel","section");
  carouselDiv.setAttribute("data-carousel", "");

  // Create the "prev" button element with the "carousel-button" class,
  // "prev" data-carousel-button attribute, and the left arrow symbol
  const prevButton = document.createElement("button");
  prevButton.classList.add("carousel-button", "prev");
  prevButton.setAttribute("data-carousel-button", "prev");
  prevButton.textContent = "◄"; // Left arrow symbol
  prevButton.addEventListener("click", slide);
  // Create the "next" button element with the "carousel-button" class,
  // "next" data-carousel-button attribute, and the right arrow symbol
  const nextButton = document.createElement("button");
  nextButton.classList.add("carousel-button", "next");
  nextButton.setAttribute("data-carousel-button", "next");
  nextButton.textContent = "►"; // Right arrow symbol
  nextButton.addEventListener("click", slide);
  // Create the unordered list (ul) element with the "slides" attribute
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("data-slides", "");

  // Create three list items (li) with the "slide" class and one with "data-active" attribute
  elements.forEach((element, i) => {
    const liElement = document.createElement("li");
    liElement.classList.add("slide");
    if (i === 0) {
      liElement.setAttribute("data-active", "");
    }

    // Create an image element with a source and alt text
    // const imgElement = document.createElement("img");
    // imgElement.src = `https://images.unsplash.com/photo-1694714567169-bcdb197f5ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80`;
    // imgElement.alt = `Nature Image #${i}`;

    // Append the image element to the list item (li)
    liElement.appendChild(element);

    // Append the list item (li) to the unordered list (ul)
    ulElement.appendChild(liElement);
  });

  // Append the buttons and the unordered list to the carousel div
  carouselDiv.appendChild(prevButton);
  carouselDiv.appendChild(nextButton);
  carouselDiv.appendChild(ulElement);

  // Append the carousel div to the body of the HTML document
  return carouselDiv;
};

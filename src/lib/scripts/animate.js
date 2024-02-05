// Function to check if an element is in the viewport
export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add or remove the "animate" class based on element visibility
export function handleVisibility() {
  const elements = document.querySelectorAll('.fade-up');
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
}

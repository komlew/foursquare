// @flow

export const scrollIntoView = (element: HTMLElement): void => {
  if (element && typeof element.scrollIntoView === 'function') {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToActive = (
  parentElement: HTMLElement | Document = document,
): void => {
  const element = parentElement && parentElement.querySelector('[data-active]');
  if (element) {
    scrollIntoView(element);
  }
};

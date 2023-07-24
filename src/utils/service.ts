export const smoothScroll = (id: string) => {
  setTimeout(() => {
    window.scrollTo({
      top: window.scrollY + (document.getElementById(id)?.getBoundingClientRect().top || 0) - 50,
      behavior: "smooth"
    });
  }, 500)
}
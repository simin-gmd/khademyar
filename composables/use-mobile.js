export default function () {
  let isMobile = false;
  window.innerWidth >= 768 ? (isMobile = false) : (isMobile = true);
  return {
    isMobile,
  };
}

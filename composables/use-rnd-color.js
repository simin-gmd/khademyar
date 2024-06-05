export default function (watcher) {
  const colors = ["blue", "yellow", "green", "red"];
  const colorRef = ref("");
  const randNum = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  };
  const getRndColor = () => {
    colorRef.value = colors[randNum(0, colors.length - 1)];
  };

  onMounted(() => {
    getRndColor();
  });
  return { colorRef, getRndColor };
}

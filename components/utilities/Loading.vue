<template>
  <div class="w-full h-full flex justify-center items-center flex-1">
    <div class="loader"></div>
  </div>
</template>
<style lang="scss">
.loader {
  border-right: 0.1em solid #0d7682;
  border-radius: 100%;
  animation: loader 1700ms linear infinite;
  &:before,
  &:after {
    content: "";
    width: 1.8em;
    height: 1.8em;
    display: block;
    position: absolute;
    top: calc(50% - 1.4em);
    left: calc(50% - 1.4em);
    border-left: 0.19em solid #0d7682;
    border-radius: 100%;
    animation: loader 900ms linear infinite reverse;
  }
  &:after {
    width: 1.6em;
    height: 1.6em;
    top: calc(50% - 1.3em);
    left: calc(50% - 1.3em);
    border: 0;
    border-right: 0.16em solid #0d7682;
    animation: none;
  }
}

@keyframes loader {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>

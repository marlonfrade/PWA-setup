let deferredPrompt;

// logic to register the service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function () {
    console.log("Service Worker registered");
  });
}

// Logic to install the app in home screen
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("before install prompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

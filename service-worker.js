self.addEventListener('install', event => {
    console.log('Service Worker installing.');
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
  });if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }

  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI to notify the user they can add to home screen
  showInstallPromotion();
});

function showInstallPromotion() {
  // Create and show your custom install prompt
  const installPrompt = document.createElement('div');
  installPrompt.innerHTML = `
    <div id="installPromotion" style="position: fixed; bottom: 0; width: 100%; background: #000; color: #fff; text-align: center; padding: 10px;">
      <span>Install this app on your home screen for a better experience.</span>
      <button id="installButton" style="margin-left: 10px; padding: 5px 10px; background: #007bff; color: #fff; border: none; border-radius: 5px;">Install</button>
      <button id="dismissButton" style="margin-left: 10px; padding: 5px 10px; background: #6c757d; color: #fff; border: none; border-radius: 5px;">Dismiss</button>
    </div>
  `;
  document.body.appendChild(installPrompt);

  document.getElementById('installButton').addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
      document.getElementById('installPromotion').remove();
    });
  });

  document.getElementById('dismissButton').addEventListener('click', () => {
    document.getElementById('installPromotion').remove();
  });
}

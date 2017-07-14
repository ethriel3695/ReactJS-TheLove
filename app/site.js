navigator.serviceWorker && navigator.serviceWorker.register('./app/sw.js').then(function(registration) {
    console.log('Excellent, registered with scope: ', registration.scope);
}).catch(function(error) {
    console.log('ServiceWorker registration failed:', error);
});
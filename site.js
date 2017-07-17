navigator.serviceWorker && navigator.serviceWorker.
    register('sw.js').then(function(registration) {
        console.log('Excellent, registered with scope: ', registration.scope);
    }).catch(function(error) {
        console.log('ServiceWorker registration failed:', error);
});

// This file may be overwritten by sps-cli, anything outside of the
// exported object will be removed when using the sps-cli commands.

// Important! This file is used by both Node and browser, so it must
// remain in ES5 format (for now).

module.exports = {
    "title": "Feedback Localization Test",
    "namespace": "loctest",
    "navigation": [],
    "routes": {
        "index": {
            "slug": "/",
            "full": "/",
            "src": "app/routes/index.route",
            "redirect": "overview"
        },
        "overview": {
            "nav": true,
            "name": "overview",
            "title": "Overview",
            "full": "/overview/",
            "slug": "/overview/",
            "src": "app/routes/overview/overview.route"
        }
    },
    "roles": {},
    "features": {}
};
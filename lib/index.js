const urlLocal = require("url-local");

/**
 * urlRemote
 * Checks if a given url is a remote url or not.
 *
 * @name urlLocal
 * @function
 * @param {String} url The local/remote url.
 * @return {Boolean} `true` if the url is remote, `false` otherwise.
 */
module.exports = function urlRemote(url) {
    try {
        const r = urlLocal(url);
        return !r && r !== null;
    } catch (e) {
        return false
    }
};


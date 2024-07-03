// ==UserScript==
// @name         ACM to UPS ACM
// @namespace    None
// @version      2024-04-29
// @description  Replace ACM URL with Paul Sabatier ACM URL
// @author       You
// @match        https://dl.acm.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ieee.org
// @grant        none
// ==/UserScript==

const ACMorigin = "https://dl.acm.org";
const UPSorigin = "https://dl-acm-org.gorgone.univ-toulouse.fr";

(function() {
    let origin = window.location.origin;
    let pathName = window.location.pathname;
    if (origin === ACMorigin) {
        window.location.assign(UPSorigin+pathName);
    }
})();

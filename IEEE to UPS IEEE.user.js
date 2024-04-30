// ==UserScript==
// @name         IEEE to UPS IEEE
// @namespace    None
// @version      2024-04-29
// @description  Replace IEEE URL with Paul Sabatier IEEE URL
// @author       You
// @match        https://ieeexplore.ieee.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ieee.org
// @grant        none
// ==/UserScript==

const IEEEorigin = "https://ieeexplore.ieee.org";
const UPSorigin = "https://ieeexplore-ieee-org.gorgone.univ-toulouse.fr";

(function() {
    let origin = window.location.origin;
    let pathName = window.location.pathname;
    if (origin === IEEEorigin) {
        window.location.assign(UPSorigin+pathName);
    }
})();
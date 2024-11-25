// ==UserScript==
// @name         publication URL to UPS URL
// @namespace    None
// @version      2024-04-29
// @description  Replace a publication URL with Paul Sabatier corresponding URL
// @author       You
// @match        https://www.sciencedirect.com/*
// @match        https://dl.acm.org/*
// @match        https://ieeexplore.ieee.org/*
// @match        https://link.springer.com/*
// @match        https://www.science.org/*
// @match        https://www.jstor.org/*
// @match        https://www.taylorfrancis.com/*
// @match        https://scholar.google.com/*
// @match        https://scholar.google.fr/*
// @match        https://pubmed.ncbi.nlm.nih.gov/*
// @grant        none
// ==/UserScript==

const scholarRegex = /https:\/\/scholar\.google\..*/;
const scholarUPSInstitutioncode = 10010405646339770192;

function isScholar(origin) {
    return scholarRegex.test(origin);
}

const addArchipelLinks = function (base, path) {
    let url = new URL(path, base);
    if (!url.searchParams.has('inst')) {
        url.searchParams.append('inst', scholarUPSInstitutioncode);
        window.location.assign(url);
    }
}

const arr = [
    { key: 'https://www.sciencedirect.com', value: 'https://www-sciencedirect-com.gorgone.univ-toulouse.fr' },
    { key: 'https://dl.acm.org', value: 'https://dl-acm-org.gorgone.univ-toulouse.fr' },
    { key: 'https://ieeexplore.ieee.org', value: 'https://ieeexplore-ieee-org.gorgone.univ-toulouse.fr' },
    { key: 'https://link.springer.com', value:'https://link-springer-com.gorgone.univ-toulouse.fr'},
    { key: 'https://www.science.org', value:'https://www-science-org.gorgone.univ-toulouse.fr'},
    { key: 'https://www.jstor.org', value:'https://www-jstor-org.gorgone.univ-toulouse.fr'},
    { key: 'https://www.taylorfrancis.com', value:'https://www-taylorfrancis-com.gorgone.univ-toulouse.fr'},
    { key: 'https://pubmed.ncbi.nlm.nih.gov', value:'https://pubmed-ncbi-nlm-nih-gov.gorgone.univ-toulouse.fr'}
  ];
const urls = new Map(arr.map((obj) => [obj.key, obj.value]));

(function() {
    let origin = window.location.origin;
    let path = window.location.pathname + window.location.search;
    if (isScholar(origin)) {
        addArchipelLinks(origin,path);
    }
    else {
        window.location.assign(urls.get(origin)+path);
    }
})();

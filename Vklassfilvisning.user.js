// ==UserScript==
// @name         Vklassfilvisning
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  Lägg till en "Öppna i Offie Viewer" och en "Öppna i Google Viewer" till filer med drop-down-meny
// @author       AndreasLonn
// @match        https://www.vklass.se/*
// @icon         https://www.vklass.se/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll("ul.fileMenu").forEach((elem) => {
        if(elem.parentNode.classList.contains("link")) return;
        function skapaLänk(namn, grundUrl, position) {
            let länkElement = document.createElement("li");
            länkElement.innerHTML = elem.querySelector("li:nth-child(2)").innerHTML
                .replace("https://files.vklass.se", grundUrl + "https://files.vklass.se")
                .replace("Hämta", namn)
                .replace("href", "target='blank' rel='noopener noreferrer' href");
            elem.insertBefore(länkElement, elem.querySelector(`li:nth-child(${position})`));
        }
        skapaLänk("Öppna i Office Viewer", "https://view.officeapps.live.com/op/view.aspx?src=", 3);
        skapaLänk("Öppna i Google Viewer", "https://docs.google.com/viewerng/viewer?url=", 4);
    });
})();

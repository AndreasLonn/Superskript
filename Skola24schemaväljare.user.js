// ==UserScript==
// @name         Skola24schemaväljare
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Öppna schemat med ID:t i länken
// @author       AndreasLonn
// @match        https://web.skola24.se/timetable/timetable-viewer/*
// @icon         https://www.skola24.com/favicon/favicon-32x32.png
// ==/UserScript==

// Användning:
// Skapa ett bokmärke med länken till schemat enligt nedan.
// När du är på sidan trycker du på backsteg sen och enter:
// Med ett personnummer:
//     https://web.skola24.se/timetable/timetable-viewer/skolans-hemsida/skola/ÅÅMMDD-XXXX
//
// Med flera personnummer:
//     https://web.skola24.se/timetable/timetable-viewer/skolans-hemsida/skola/ÅÅMMDD-XXXX,ÅÅMMDD-XXXX
//
// Exempel från Erik Dahlbergsgymnasiet i Jönköping:
//     https://web.skola24.se/timetable/timetable-viewer/jonkoping.skola24.se/Erik%20Dahlbergsgymnasiet/010101-1234
//
// Med hash:
//     https://web.skola24.se/timetable/timetable-viewer/skolans-hemsida/skola/hash
//
// Exempel från Erik Dahlbergsgymnasiet i Jönköping:
//     https://web.skola24.se/timetable/timetable-viewer/jonkoping.skola24.se/Erik%20Dahlbergsgymnasiet/mgMIk6keA8YeGh6gSG865S9aJO8z1P4gTuGxeoRgpZkq0Qt6TvuANsM1mTIfbw3skFC7ln4aHixIi2tA5O2pNXJRbV6To8BGwtnGvmCJugXcy-5AfYiq_MRaDu4Lu4wh
//
// Hur man får tag i hashen:
//  1. Tryck Ctrl+Shift+E
//  2. Skriv in ID:t i "Ange ID"-rutan och klicka på "Visa"
//  3. Klicka på filen "signature" under "Nätverk"-fliken
//  4. Klicka på "Svar" i rutan till höger
//  5. Efter "signature:" hittar du hashen (citattecknen ingår INTE i hashen)

(function() {
    'use strict';
    let i = 0;
    (function check() {
        if (++i > 20) return;

        let elem = document.querySelector(".w-input");
        if (elem == null) {
            setTimeout(check, 100);
            return;
        }

        let url = window.location.pathname.split("/");
        elem.value = url[url.length - 1] + "-";
        elem.focus();
    })();
})();

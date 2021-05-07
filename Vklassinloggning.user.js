// ==UserScript==
// @name         Vklassinloggning
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Logga in i Vklass snabbare, för elever i Jönköpings kommun 
// @author       Herman-L
// @match        https://auth.vklass.se/
// @match        https://login.grandid.com/?*
// @icon         https://www.google.com/s2/favicons?domain=vklass.se
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (location.hostname === "auth.vklass.se") {
        let bankId = document.querySelector("[href='/bankid/initiate']");
        if (!bankId) return;

        let förälder = bankId.parentElement;
        let länk = bankId.cloneNode();
        länk.href = "https://auth.vklass.se/saml/initiate?idp=jonkoping-skolfederation-idp&org=48";
        länk.innerHTML = bankId.innerHTML
            .replace("BankID", "Jönköpings kommun")
            .replace("/images/idp-icons/bank-id.svg", "https://www.jonkoping.se/images/18.12ea8e7716736a14f7a2026/1543307654797/logo-jkpg-vit-300px.png")
            .replace("<img", "<img style='object-fit: cover; object-position: left; padding-left: 3px;'");

        förälder.insertBefore(länk, bankId);
    } else if (location.hostname === "login.grandid.com") {
        let elev = document.querySelector("[href$='next=elev']");
        let submit = document.querySelector("button[type='submit']");

        if (elev) elev.click();
        if (submit) submit.click();
    }
})();

const $$ = DOMElementString => document.querySelector(DOMElementString); // look mom i made jquery

export const html = $$('html');
export const body = $$('body');
export const header = $$('header.k-header');
export const $doc = $(document);
export const $win = $(window);
export const $getsHeaderMargin = $('#k-headermargin');
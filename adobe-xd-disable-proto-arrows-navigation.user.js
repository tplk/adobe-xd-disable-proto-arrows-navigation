/**
 * MIT License
 *
 * Copyright (c) 2019, Dmitry Teplov <tplk@itplk.ru> (https://itplk.ru)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// ==UserScript==
// @id           adobe-xd-disable-proto-arrows-navigation
// @name         adobe-xd-disable-proto-arrows-navigation
// @description  Disables left/right arrows navigation for Adobe XD shared prototypes (xd.adobe.com/view/*).
// @version      0.1

// @author       Dmitry Teplov <tplk@itplk.ru> (https://itplk.ru)
// @namespace    https://github.com/tplk
// @homepageURL  https://github.com/tplk/adobe-xd-disable-proto-arrows-navigation
// @downloadURL  https://github.com/tplk/adobe-xd-disable-proto-arrows-navigation/raw/master/adobe-xd-disable-proto-arrows-navigation.user.js

// @license      ISC - https://opensource.org/licenses/MIT
// @copyright    Copyright (c) 2019, Dmitry Teplov <tplk@itplk.ru> (https://itplk.ru)

// @include        https://xd.adobe.com/view/*
// @run-at       document-body
// ==/UserScript==

'use strict';

(function(browserWindow) {
  let window;
  if (typeof unsafeWindow !== 'undefined') {
    window = unsafeWindow;
  } else {
    window = browserWindow;
  }

  const sidewaysArrowKeyCodes = [
    37, // arrowLeft
    39, // arrowRight
  ];

  function isArrowKeyCode(keyCode) {
    return sidewaysArrowKeyCodes.includes(keyCode);
  }

  function preventIfArrow(event) {
    if (isArrowKeyCode(event.keyCode)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  window.document.body.addEventListener(
    'keyup',
    event => preventIfArrow(event),
  );
})(window);

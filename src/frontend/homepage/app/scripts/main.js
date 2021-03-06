/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var body = document.body;
  var nav = querySelector('.nav');
  var menuBtn = querySelector('.menu');
  var modal = querySelector('.ui-mask-modal');

  function toggleMenu() {
    body.classList.toggle('open');
    nav.classList.toggle('open');
    nav.classList.add('opened');
    modal.classList.toggle('ui-mask-visible');
  }

  function closeMenu() {
    body.classList.remove('open');
    nav.classList.remove('open');
    modal.classList.remove('ui-mask-visible');
  }

  menuBtn.addEventListener('click', toggleMenu);
  modal.addEventListener('click', toggleMenu);
  nav.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
}());

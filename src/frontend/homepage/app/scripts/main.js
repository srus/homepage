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

  var sideNav = querySelector('.side-nav');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  // var main = querySelector('main');
  var modal = querySelector('.ui-mask-modal');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    sideNav.classList.remove('open');
    modal.classList.remove('ui-mask-visible');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    sideNav.classList.toggle('open');
    sideNav.classList.add('opened');
    modal.classList.add('ui-mask-visible');
  }

  modal.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  sideNav.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();

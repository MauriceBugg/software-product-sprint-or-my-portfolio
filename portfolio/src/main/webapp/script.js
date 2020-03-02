// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random welcome message to welcome page.
 */
function getRandomQuoteUsingArrowFunctions(){
 /* const response = await fetch('/data');
  const greeting = await response.text();
  document.getElementById('greeting-container').innerText = greeting;*/

fetch('/data')  // sends a request to /my-data-url
.then(response => response.json()) // parses the response as JSON
.then((greetings) => { // now we can reference the fields in greetings!

const greetListElement = document.getElementById('greeting-container');
    greetListElement.innerHTML = '';
    greetListElement.appendChild( 
        createListElement('1: ' + greetings[0]));
    greetListElement.appendChild(
        createListElement('2: ' + greetings[1]));
    greetListElement.appendChild(
        createListElement('3: ' + greetings[2]));
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

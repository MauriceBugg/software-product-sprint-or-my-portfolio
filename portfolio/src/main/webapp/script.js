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
 * Adds a random album to the page.
 */
function addRandomAlbum() {
  const favorite_album =
      ['Drake: Take Care', 'Adele: 25', 'Weekend: Trilogy', 'Kanye West: The Life of Pablo', 
      'Sam Smith: In the Lonely Hour', '2 Chainz: Based On A T.R.U. Story', 'Yung Thug: So Much Fun',
      'Maroon 5: V', 'Imagine Dragons: Night Visions'];

  // Pick a random album.
  const album = favorite_album[Math.floor(Math.random() * favorite_album.length)];

  // Add it to the page.
  const albumContainer = document.getElementById('album-container');
  albumContainer.innerText = album;
}

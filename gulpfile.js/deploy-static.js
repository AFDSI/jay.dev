/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {sh} = require('@lib/utils/sh.js');
// const {DIST, PAGES_DEST} = require('@lib/utils/project').paths;
const {PAGES_DEST} = require('@lib/utils/project').paths;
const {NETLIFY_DEPLOY_TOKEN} = process.env;
const SITES = [
  {
    NAME: 'ngfalls.netlify.app',
    ID: '7235a350-a231-4df3-9ed8-a1d7157ad331',
    DIR: PAGES_DEST,
  },
  // {
  //   NAME: 'playground.amp.dev',
  //   ID: 'acead270-9404-4dde-81e4-aec0e6884869',
  //   DIR: `${DIST}/playground`,
  // },
  // {
  //   NAME: 'preview.amp.dev',
  //   ID: 'caf28d42-024a-4efb-b266-b00cf10847a3',
  //   DIR: `${DIST}/examples`,
  // },
];

async function staticDeploy() {
  for (const SITE of SITES) {
    console.log(`attempting to deploy ${SITE.DIR}`);

    // await sh(`netlify link`);
    await sh(
      `npx netlify deploy --prod --auth ${NETLIFY_DEPLOY_TOKEN} --site ${SITE.ID}`,
      {
        workingDir: SITE.DIR,
      }
    );
  }
}

exports.staticDeploy = staticDeploy;

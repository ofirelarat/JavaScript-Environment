/* This file contains references to the vendor libraries
we'er using in this project. This is used by webpack
in the production build only*. A seperate bundle for vendor
code is useful since it's unlikely to changeas often
as the application's code. So all the libraries wre reference
here will be written to vendor.js so they can be
cached until one of them change. So basically, this avoids
costumers having to dwonload a huge JS file anytime  a line
of code changes. They only have to download vendor.js when
a vendor library vhangs witch should less frequent.
any file that aren't reference here will be bundle into
main.js for the production build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';

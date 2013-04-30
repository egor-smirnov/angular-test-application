# AngularJS Test Application

## How to use

1) Dependencies (they were updated):
  * run this:`npm install && bower install`

2) In order to run unit tests:
  * run this:`grunt unit`

3) In order to run e2e tests:
  * run this:`grunt e2e`
  * or you could use: `grunt server` and go to `http://localhost:9000/test/runner.html`

## Additional notes

1) Instead of testacular now used karma (that si just rename, but old testacular is unavailable currently).

2) I have separated actual mocks (`app/mocks/app.js`) and $httpBackend initialization (now it's in `app/scripts/app.js`) - this was done due to problems with e2e tests.

3) When I was applying mock data, there was some glitch in CSS, so I corrected CSS a bit - see this commit https://github.com/lastday/angular-test-application/commit/3e7c3baeaa66990e4eb8ef11d4346b005e04c139.

4) Have to change mock data a bit - see this commit https://github.com/lastday/angular-test-application/commit/b333b7b618212aaf272eeb5db82e2c64ea221caa

5) Added extra code to use back button - see this commit https://github.com/lastday/angular-test-application/commit/9a399c6f1ee28f7e9c83620697d87643b2fd536b. 

*Bryan mentioned in comments that making commented out e2e tests passing would be appreciated - and I hope it would be so ;)*

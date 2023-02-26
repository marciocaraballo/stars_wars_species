# Star wars species API parsing

Code challege based on: https://codesandbox.io/s/fe-api-parser-challenge-l823e?file=/README.md

![app](https://user-images.githubusercontent.com/2772762/221444457-b7974d6d-a6e5-4075-b6ba-e12186ac403e.png)

## Tech stack

- App boostrapped with create-react-app
- Typescript for types definition and type checks
- prettier was run to provide a standarized code styling
- Testing with Jest and RTL
- Sass for css preprocessing
- browser's fetch API for API calls

## Changes applied to original instructions

Some changes were added even though they weren't part of the requirements

- Code base was built in javascript, however TS was among the dependencies. In order to make full use of TS, files were changed to `.tsx` and `.ts`,
types were defined when they were considered necessary. Proptypes were not used in favor of TS.
- create-react-app of the codesanbox link has a few outdated dependencies, so a new project was bootstraped with latest dependencies.
- Some minimal styles were changed as the original ones didn't match the screenshot.
- Some minimal changes were made to `Species.tsx` in order to display height in inches with the symbol correctly.


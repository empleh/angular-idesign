# Angular IDesign

Example project using IDesign principles for architecture and folder structure

## High Level Overview

1 - App module should be very minimal and only contain items shared accross the entire app like header/footer/sidebar

2 - All other modules are lazy loaded by route

3 - Shared module holder components used by more than 1 module

4 - Managers should mirror backend Managers

5 - Accessors handles data retrieval, commonly api calls to backend

6 - Utilities should be pure TypScript classes that could be used anywhere







## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

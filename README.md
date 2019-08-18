# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

GIT Commands:
-------------

…or create a new repository on the command line

echo "# RestService" >> README.md
git init
git add .

git commit -m "first commit"
##OR
git commit -m "Add existing file" #####(in all other cases)

git remote add origin https://github.com/ayanaksha/RestService.git

**************************************
if there is an error:
Remote origin alreay exists:
It means pretty much what it says, the remote origin already exists, ie. you've already set it up before. You can type git remote -v to see what/where remotes are set. If you made a mistake before you can type git remote rm origin to clear it out and try again
-----------------------------
git remote -v
git remote rm origin
-----------------------------
then try add origin command
**************************************


git push -u origin master

…or push an existing repository from the command line

git remote add origin https://github.com/ayanaksha/RestService.git
or 
git remote add origin https://github.com/ayanaksha/HackFSEAngular_V1.git

git remote -v
git push -u origin master

************************
use the below commands to fix the devtools issue 
npm install
ng update
npm audit fix -- Try only this step first
npm update
************************


####checkout a repository
####create a working copy of a local repository by running the command

git clone /path/to/repository

####when using a remote server, your command will be

git clone username@host:/path/to/repository

reset all local changes

git fetch origin
git reset --hard origin/master

####further reference

https://gist.github.com/blackfalcon/8428401
http://rogerdudler.github.io/git-guide/
https://github.com/ayanaksha/RestService

ANGULAR COMMANDS
----------------

To install Angular Material
---------------------------
1) To install Angular CLI use ---> npm install -g @angular/cli
(prerequisite: Must have Node.JS installed on the system)
2) In the already existing project use ---> ng add @angular/material
3) Or use 
npm install --save @angular/material @angular/cdk @angular/animations

Open and run a project
----------------------
1) ng new <appName>
2) ng generate component <component-name>
OR ng g c <component-name>
3) ng generate service <service-name> 
(hint: you can also provide a new folder structure to store the services)
OR ng g s <service-name>

4) ng serve -o (To start the development server and open the app in chrome directly)

5) "code ." (Type:Code+space( )+period (.) inside the app folder to open the project directly in Visual Studio Code) 

For generation of Schematics in Angular Material use
----------------------------------------------------

1) ng generate @angular/material:material-nav --name my-navbar 
(use: material-nav not materialnav)
2) ng generate @angular/material:material-dashboard --name <component-name>
3) ng generate @angular/material:material-table --name <component-name>

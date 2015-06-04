#Demo URL
http://licopia.github.io/


#Notice
In the application, I set a constraint that the departure time cannot be earlier than current date. 
If you cannot find any result, please check the time in data.json.


# Libraries & Framework 
1. Bootstrap 
Firstly, it predefined some global styles to resolve some cross-browser problems. Secondly, it contains a lot of basic style classes for me to use.
In addition, it is easy to use and can save my time to make the application responsive.

2. AngularJS
The application is a single page application(SPA) which is fully based on AngularJS.
Following are some advantages of AngularJS:
1) Well supported and good documentation.
2) A large amount of open source libraries and the number is still growing. 
3) 2 ways data-binding
4) Dependency injection 
5) Directives
6) Unit test
7) MVC
8) Scope, controller , template and compatible with JQuery
9) Routing

3. Jasmine 
Jasmine is a behaviour-driven development framework for testing JavaScript code. 
It has become the most popular choice for testing Angular applications


# Instruction
1. Folder 'src' contains all the source code
Method 1: You can put it on a server or local host to preview.
Method 2: Install nodeJs and go to the app root
>npm install
>npm start 
Application:  http://localhost/src/index.html
Unit test:  http://localhost/src/testRunner.html 

2. Run Minify Version
>npm install -g grunt-cli
>grunt build:angular
>npm start
then preview:  http://localhost/angular/index.html  


#Known Issues
price slider position not correct sometimes.   




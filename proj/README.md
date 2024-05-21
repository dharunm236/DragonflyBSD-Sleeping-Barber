The Sleeping Barber Problem
===========================

The Sleeping Barber Problem is an Open Educational Resource (OER) developed for
the Operating Systems I course at University of São Paulo (USP), São Carlos campus.

This project aims to improve the course experience for teachers and students alike
by providing resources to aid in understanding an *almost* classic problem in *inter-process
communication* and *synchronization*. Among these resources there is an explanation of
the problem and the core concepts needed to understand it, the development and proposal
of one of the possible solutions, a visualization tool demonstrating the state of the
semaphores and mutexes, and code implementation of the proposed solution.

Dependencies
------------

A browser capable of interpreting JavaScript.

Installing
----------

Installing this OER is as simple as cloning this repository, or extracting the contents
of a zip file and running `index.html` on your browser.

Usage
-----

There's a nice panel on top of the page with one entry for each section of the project,
each one of them is pretty self-explanatory, being mostly text or code. The exception
is the visualization page, which has its usage described below.

The visualization tool is used to simulate the proposed implementation of one solution
to the Sleeping Barber problem, using semaphores and mutexes. The term `step` used in
the context of this tool is an attempt at simulating a scheduler.

The visualization is composed of panels: the waiting room lists customers currently
waiting to be serviced by the barber; the barber's chair holds the current customer
getting a haircut; the state panel displays the states of the semaphores and mutex and
the number of customers at the barbershop.
A status panel displays the current status of the application, a sentence explaining
what's been done in the current step.

Both barber and customer's functions are the last part of the visualization tool, and
their lines are highlighted to represent the lines currently being executed in the
current step.

Labels in the panel title represent the state of the threads. A blue label indicates
that a thread is currently active, as selected by the scheduler. Green and yellow
labels indicate whether a program is running or waiting on a semaphore/mutex. Gray
label indicates which client thread is being executed. 


Code implementations of the problem
-----------------------------------

Code implementations will have syntax highlighting provided by PrismJS, but
the pre-built PrismJS files included in this project only support highlighting
for:

* C

This decision reflects in a minimal JS codebase to optimize page loading times.
If an implementation in a different language is to be included, PrismJS should be
rebuilt. Rebuilding can be done from PrismJS's source or from their download
page, where language-specific syntax highlighters, features (such as line
numbering), and themes can be selected.

To do
-----

* [ ] Add solutions in more programming languages
* [ ] Templating and translation to Portuguese
* [ ] Real-time language switching in JavaScript
* [ ] Visualization tools with real multi-threading

Contributions
-------------

Code contributions must follow conventions adopted by the project.

Language translation contributions are highly encouraged, even if there is no
real support for them yet! An implementation of a templating engine is coming.

Corrections are also very welcome.

Resources
---------

Resources used in this project:

* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [jQuery](http://jquery.com/)
* [Prism](http://prismjs.com/)

License
-------
Code is licensed under the MIT license.
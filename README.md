***TDD in Node with Mocha and friends***

Let's build a simple geolocation app using Test Driven Development with
[Mocha](http://mochajs.org)
[Chai](http://chaijs.com/guide/), and [Sinon](http://sinonjs.org). 

The emphasis will be on how to build a minimal testing environment. First we
will set up a project with [npm](https://www.npmjs.com), and configure our tests
to run in the command line. 

That's great, but how about using [CoffeeScript](https://www.npmjs.com), and
running the test reporter in the browser. This is where we discover some limitations of
our simple testing environment. One thing that will become immediately apparent
is that if our code is operating on the
[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
then it will conflict with Mocha's beautiful in-browser reporting. Also we have
to hard code a particular browser that our local machine is using. 

The next step up from a simple testing environment is running test with a web
driver like [Selenium](http://www.seleniumhq.org) or
[PhantomJS](http://phantomjs.org), a headless browser. Unfortunately, the
configuration of these tools is difficult in the Node.js environment. 

There are many Node modules out there that aim to tackle this. If we have time
we'll look at [Karma](http://karma-runner.github.io/0.12/index.html).



### [blog](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html)

1. unit test

> 检查代码(angular-mocks.js)，代码还未执行，测试框架mocha

* Testing Controllers 是否为空（To capture any XHR requests in Unit Testing using mocks）
* Testing Services / Factories 是否为空，基本功能（Factories）对不对
* Testing Filters 是否为空，基本功能对不对
* Testing Directives 检查一些不需要xhr的directive的结果是否正确

2. midway test

> 检查代码和服务,服务已经启动（'connect:testserver'），但是需要自己执行具体操作看看结果如何；测试框架mocha

* Test modules 检查最顶层的module是否存在，此时代码已经执行了，所以放在midway
* Test routes js动态改变route，得到的页面url是否正确
* Testing Requests / Pages 页面是否加载，页面加载的内容对不对
* Testing Controllers url是否对应正确的controller
* Testing Services / Factories 基本功能（Services：xhr...）对不对
* Testing Filters 是否为空，检测功能
* Testing Templates, Partials & Views
* Testing Directives 检查一些需要xhr的directive的结果是否正确

3. e2e test

> 检查服务，服务已经启动（'connect:testserver'），且已经执行结束；测试框架ng-scenario

* Test routes
* Testing Requests / Pages 页面是否加载，页面加载的内容对不对
* Testing Controllers 执行之后HTML页面内容是否正确
* Testing Filters 执行之后HTML页面内容是否正确
* Testing Templates, Partials & Views 各个url执行之后HTML页面内容是否正确
* Testing Directives

> 自测[Protractor](https://github.com/angular/protractor),官网推荐

* protractor没有结合grunt任务（想使用任务的话可以尝试grunt-protractor-runner），不能grunt启动

* [protractor api](http://angular.github.io/protractor/#/api),[简单举例](https://github.com/angular/angular-seed/blob/master/e2e-tests/scenarios.js)

* [使用方法](https://github.com/angular/protractor/blob/master/docs/tutorial.md),注意要先启动应用（grunt serve），启动webdriver（webdriver-manager start）,把应用的地址写到配置js的baseUrl，然后启动测试(protractor 'path to conf.js')才有效



5. 其他

* animation

* resource

### [mocha](http://mochajs.org/)

> 可以在node直接跑的测试框架

### [chai](http://chaijs.com/)

> 断言库（Assertion Library），理解成基本功能库好了（类似utils）

### 配置

* gruntfile 中指定karma的配置（文件）json

* karma的配置中指定使用的测试框架（frameworks），以及测试的文件（files）等



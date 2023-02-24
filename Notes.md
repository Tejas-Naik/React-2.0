## Before React

### we used to send a request to a server get back the data and so on

<br/>

### - In this process the biggest problem was changing the DOM

### - The only way of changing the DOM was to refresh the page

### - This used to slow down the page so we cant do many tasks at once. (eg. notification numbers, sign-in/sign-out etc...)

<br/>

## JQuery

### JQuery helped with the DOM Manipulation and made the development easier at the time

<br/>

## AngularJS (not angular)

### The google team created their framework which introduced the idea of creating containers for apps like MVC(Model View Controller) or MVVM(Model-View-ViewModel) architechture.

<br/>

## Problems with AngularJS

### - In the MVC or some architechtures you cannot access some containers thats why the problem with the AngularJS was the data flow.

### - The UI changes so we cannot change some of the data thats why it was hard to find the bugs in the code or some features didnt work

<br/>

## React

### - `React` was introduced at JSConf `2013`

### - It introduced the concept of `components`

### - because of the popularity of the React `AngularJS` also changed its architechture and released the new version called `Angular `(without the JS)

<br/>

## What made react so popular?

### 1) Dont touch the `DOM` I'll do it.

#### - `Imperative` (before react)

#### • before react developers have to see the events changing and change the ODM accordingly (eg. they have to keep looking for an event to happen and immidiately change the DOM)

<br/>

#### - `Declarative` (React)

#### • in React you have a global variable `state`

#### • `state` is like the `blueprint` for the app we are building.

#### • whenever the `state` changes it updates the DOM `automatically`

#### • `React` means it reacts whenever the `state` changes

<br/>

### 2) Build `websites` like `Lego Blocks`

#### • Creating a `component` for small blocks

#### • So that making them `Re-usable`

#### • different components like `nav`, `button`,`a` tags so all are same across all the pages

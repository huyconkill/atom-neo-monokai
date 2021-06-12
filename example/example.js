import React, { Component } from 'react';

var unknown    = undefined,
    endless    = Infinity,
    self       = this,
    string     = new String('string'),
    array      = [1, 2, 3, 4, 5],
    document   = window.document,
    simpleExpr = /^#?([\w-]+)$/;

/**
 * @class Example
 * @description An example
 */
class Example extends Component {
    static staticMethodExample() {
        console.log(`Hello ${world}`);
    }

    render() {
        return <UserGreeting />
    }
}

/**
 * @param  {String} foo description
 */
function UserGreeting(foo) {
    return <h1>Hello Kha Du Du</h1>
}

export default Example;

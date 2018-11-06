import React from 'react';
import {render} from 'react-dom';
import TodoList from './component/TodoList';

const list = ['a', 'b', 'c'];

render(<TodoList list={list}/>, document.querySelector('#app'));

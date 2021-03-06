import React, { Component } from 'react';

import PageHeader from './../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm></TodoForm>
                <TodoList></TodoList>
            </div>
        );
    }
}

export default Todo;
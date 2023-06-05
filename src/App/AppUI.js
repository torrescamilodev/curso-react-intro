import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodosLoading} from '../TodosLoading';
import { TodosError} from '../TodosError';
import { EmptyTodos} from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm} from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import React from 'react';

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return(
        <>
            <TodoCounter
                // completed={completedTodos}
                // total={totalTodos}
            />
            <TodoSearch 
                // searchValue={searchValue} 
                // setSearchValue={setSearchValue}
            />

            {/* <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => ( */}
                    <TodoList>
                        {loading && (<>
                            < TodosLoading />
                            < TodosLoading />
                            < TodosLoading />
                        </>
                        )}
                        {error && < TodosError />}
                        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

                        {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                        ))}
                    </TodoList>
                {/* )}
            </TodoContext.Consumer> */}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
            {/* Esto no es HTML es JS con una sitaxis especial que se llama JSX que intanta parecerse a HTML para que sea mucho mas facil de leer, pero en realidad sigue siendo JS*/}

            {/* En el componente modal tienen que ir todos los componentes que se quieran teletrasnportar entre nodos de HTML */}
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </>
    );
}

export { AppUI };
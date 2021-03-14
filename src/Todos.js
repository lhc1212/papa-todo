import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import FlipMove from "react-flip-move"
import "./Todos.css";
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from "@material-ui/icons/Delete"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const Todos = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();

        if (input.length === 0) return;
        setTodos([...todos, { text: input, key: uuidv4(), complete: false }])
        setInput("");
    }

    const deleteTodo = (e, key) => {
        e.preventDefault();

        let newTodos = todos.filter((todo) => todo.key !== key);
        setTodos(newTodos);
    }

    const completeTodo = (e, key) => {
        e.preventDefault();
        todos.forEach((todo) => {
            if (todo.key === key) {
                todo.complete = true;
            }
        });
        setTodos([...todos]);
    }

    return (
        <div className="todos">
            <div className="todos__form">
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a todo..." />
                    <IconButton onClick={addTodo} type="submit">
                        <AddIcon style={{ color: "black" }} />
                    </IconButton>
                </form>
            </div>

            <h2>Todo - {todos.length}</h2>

            <div className="todos__list">
                <FlipMove>
                    {todos.map((todo) => (
                        todo.complete === true ? (
                            <div className="todos__todo">
                                <h3 className="todos__todoName--complete">{todo.text}</h3>
                                <IconButton style={{ color: "red" }} onClick={(e) => deleteTodo(e, todo.key)} >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        ) : (
                            <div className="todos__todo">
                                <h3>{todo.text}</h3>

                                <div className="todos__todoOptions">
                                    <IconButton style={{ color: "green" }} onClick={(e) => completeTodo(e, todo.key)}>
                                        <DoneOutlineIcon />
                                    </IconButton>

                                    <IconButton style={{ color: "red" }} onClick={(e) => deleteTodo(e, todo.key)} >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                        )
                    ))}
                </FlipMove>
            </div>
        </div >
    )
}

export default Todos

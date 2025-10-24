import React,{ Component } from "react";
import "./TaskList.css"

class TaskList extends Component {
    inputRef = React.createRef();

    static tasks = []

    handleCreate = () => {
        const tasksId = TaskList.tasks.length > 0 ? Math.max(...TaskList.tasks.map(item => item.id)) + 1 : 0;
        const tasksText = this.inputRef.current.value;

        const object = { id: tasksId, text: tasksText }
        if (tasksText.length < 1) {
            alert("Ну как бы так сказать, надо что-то написать, чтобы создать задание. \nНу это так чисто информационная сводка")
        } else { 
            TaskList.tasks.push(object)
            this.inputRef.current.value = ""
        }
        this.forceUpdate();
    };

    handleDelete = (id) => {
        TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
        this.forceUpdate();
    };

    render() { 
        return (
            <div className="TasksContainer">
                <input type="text" ref={this.inputRef}/>
                <button type="button" onClick={() => this.handleCreate()} className="createTaskBtn">Создать</button>

                <ul>
                    {
                        TaskList.tasks.map(({ id, text }) => (
                            <li key={id} className="item">
                                <p className="itemText">{text}</p>
                                <button type="button" onClick={() => this.handleDelete(id)} className="deletTaskBtn">Удалить</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TaskList;
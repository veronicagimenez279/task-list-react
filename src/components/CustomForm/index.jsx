import { useState } from 'react';

import styles from '../TaskItem/index.module.css'


const CustomForm = ({ addTask }) => {

    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            description: description,
            checked: false,
            id: Date.now()
        });
        setTask('');
        setDescription('');
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setTask('');
        setDescription('');
    }


    return (
        <div>
            <form
                className="todo"
                onSubmit={handleSubmit}
            >
                <div className="wrapper">
                    <input
                        type="text"
                        id="task"
                        className="input"
                        value={task}
                        onInput={(e) => setTask(e.target.value)}
                        required
                        autoFocus
                        maxLength={45}
                        placeholder="Enter Task"
                    />

                    <textarea
                        id="description"
                        className="textarea"
                        value={description}
                        onInput={(e) => setDescription(e.target.value)}
                        maxLength={120}

                        placeholder="Enter description (Optional)"
                    />

                </div>


                <div
                    className='btnwrapper'
                >


                    <button
                        type="button"
                        className={`btn ${styles.delete}`}
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                    <button
                        className="btn"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CustomForm
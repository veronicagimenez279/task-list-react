import TaskItem from "../TaskItem";

import styles from './index.module.css'


const TaskList = ({ tasks, deleteTask, checkTask, enterEditMode }) => {
    return (
        <ul className={styles.tasks}>
            {tasks.sort((a, b) => b.id - a.id).map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    checkTask={checkTask}
                    enterEditMode={enterEditMode}
                />
            ))

            }
        </ul>
    )
}

export default TaskList
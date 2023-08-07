import { useState } from 'react'
import styles from './index.module.css'

import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

const TaskItem = ({ task, deleteTask, checkTask, enterEditMode }) => {
    const [isChecked, setIsChecked] = useState(task.checked)

    const handleCheckboxChange = (e) => {
        checkTask(task.id)
        setIsChecked(!isChecked)
    }


    return (

        <li className={styles.task}>
            <div className={`btnwrapper ${styles["task-group"]}`}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isChecked}
                    name={task.name}
                    id={task.id}
                    onChange={handleCheckboxChange}

                />

                <label
                    htmlFor={task.id}
                    className={styles.label}
                >
                    <div className={styles.taskdetails}>
                        <p className={styles.title}>{task.name}</p>
                        <p className={styles.desc}>{task.description}</p>
                    </div>
                </label>



                <div className={styles["button-group"]}>
                    <button
                        className='btn'
                        aria-label={`Update ${task.name} Task`}
                        onClick={() => enterEditMode(task)}
                    >
                        <PencilIcon width={15} height={15} />
                    </button>
                    <button
                        className={`btn ${styles.delete}`}
                        aria-label={`Delete ${task.name} Task`}
                        onClick={() => deleteTask(task.id)}
                    >
                        <TrashIcon width={15} height={15} />
                    </button>

                </div>


            </div>



        </li>

    )
}

export default TaskItem
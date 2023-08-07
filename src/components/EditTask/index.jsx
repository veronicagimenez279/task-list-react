import { useEffect, useState } from 'react';

import styles from '../TaskItem/index.module.css'


const EditTask = ({ editedTask, updateTask, closeEditMode }) => {

    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name)
    const [updatedTaskDescription, setupdatedTaskDescription] = useState(editedTask.description)

    useEffect(() => {
        const closeModalifEsc = (e) => {
            e.key === "Escape" && closeEditMode()
        }

        window.addEventListener('keydown', closeModalifEsc)

        return () => {
            window.removeEventListener('keydown', closeModalifEsc)
        }
    }, [closeEditMode])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask({ ...editedTask, name: updatedTaskName, description: updatedTaskDescription });

    }

    const handleCancel = (e) => {
        e.preventDefault();
        closeEditMode()
    }


    return (
        <div
            role="dialog"
            aria-labelledby='editTask'
            onClick={(e) => { e.target === e.currentTarget && closeEditMode() }}
        >
            <form
                className="todo"
                onSubmit={handleSubmit}
            >
                <div className="wrapper">
                    <input
                        type="text"
                        id="editTask"
                        className="input"
                        value={updatedTaskName}
                        onInput={(e) => setUpdatedTaskName(e.target.value)}
                        autoFocus
                        maxLength={45}
                        placeholder="Update Task"
                    />

                    <textarea
                        id="description"
                        className="textarea"
                        value={updatedTaskDescription}
                        onInput={(e) => setupdatedTaskDescription(e.target.value)}
                        maxLength={120}
                        placeholder="Update Description"
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

export default EditTask
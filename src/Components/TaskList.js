function TaskList(props) {

    return <ul>
        {
            props.tasks.map((task, index) => {
                return <li onClick={() => {
                    props.setTasks(props.tasks.filter((task, filterIndex) => {
                        return filterIndex !== index
                    }))
                }}>{task}</li>
            })
        }
    </ul>
}

export default TaskList
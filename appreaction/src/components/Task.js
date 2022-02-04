const Task = ({task}) => {
  return (
    <div className="task">
      <h4>{task.id}</h4>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task

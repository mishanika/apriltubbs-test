import { useAppDispatch } from '../../app/hooks'
import { markTodo } from '../../features/todos/todosSlice'
import './Task.css'

type Props = {
  name: string
  status: boolean
  place: string
  time: string
  id: number
}

const Task: React.FC<Props> = ({ name, status, id, place, time }) => {
  const dispatch = useAppDispatch()

  return (
    <div
      className={`task ${status ? 'completed' : ''}`}
      onClick={(): { payload: number; type: 'todos/markTodo' } =>
        dispatch(markTodo(id))
      }
    >
      <div className="wrapper">
        <div className="name">{name}</div>
        <div className="place">{place}</div>
      </div>
      <div className="time">{time}</div>
    </div>
  )
}

export default Task

import { useRef } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addTodo } from '../../features/todos/todosSlice'
import './TaskCreator.css'

type Props = {
  isOpened: boolean
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const TaskCreator: React.FC<Props> = ({ isOpened, setIsOpened }) => {
  const dispatch = useAppDispatch()
  const nameRef = useRef<HTMLInputElement>(null)
  const placeRef = useRef<HTMLInputElement>(null)
  const timeRef = useRef<HTMLInputElement>(null)

  const hadleAdd = (): void => {
    if (nameRef.current && placeRef.current && timeRef.current) {
      if (nameRef.current.value.length < 6) {
        nameRef.current.value =
          'Name length must be more or equal to 6 characters'
        return
      }
      if (!placeRef.current.value.length) {
        placeRef.current.value = '--'
        return
      }
      if (!parseInt(timeRef.current.value)) {
        timeRef.current.value = '--'
      }

      dispatch(
        addTodo({
          name: nameRef.current.value,
          place: placeRef.current.value,
          time: timeRef.current.value,
          status: false,
        })
      )

      setIsOpened(false)
      nameRef.current.value = ''
      placeRef.current.value = ''
      timeRef.current.value = ''
    }
  }
  return (
    <div className={`task-creator ${isOpened ? 'opened' : ''}`}>
      <div className="task-creator-header">
        {' '}
        <div className="back" onClick={(): void => setIsOpened(false)}></div>
        <div className="creator-title">Add new todo</div>
        <div className="void"></div>
      </div>
      <form className="task-form">
        <input type="text" className="name" placeholder="Name" ref={nameRef} />
        <input
          type="text"
          className="place"
          placeholder="Place"
          ref={placeRef}
        />
        <input type="text" className="time" placeholder="Time" ref={timeRef} />
        <div className="submit" onClick={(): void => hadleAdd()}>
          Add your todo
        </div>
      </form>
    </div>
  )
}

export default TaskCreator

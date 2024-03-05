import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeFilter } from '../../features/filter/filterSlice'
import { Todo } from '../../pages/main/Main'
import './Stats.css'

type Props = {
  todos: Todo[]
}

const Stats: React.FC<Props> = ({ todos }) => {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bgRef.current) {
      bgRef.current.style.width = `${Math.floor(
        (todos.filter((todo) => todo.status).length / todos.length) * 100
      )}%`
    }
  }, [todos])
  return (
    <>
      <div className="bg" ref={bgRef}></div>
      <div className="status">
        <div className="left-side">
          <div className="stats-title">
            <div>Your</div>
            <div>Todos</div>
          </div>
          <div className="date">{new Date(Date.now()).toDateString()}</div>
        </div>
        <div className="right-side">
          <div className="score">
            <div className="completed-score">
              <div>{todos.filter((todo) => todo.status).length}</div>
              <div>Done</div>
            </div>
            <div className="uncompleted-score">
              <div>{todos.filter((todo) => !todo.status).length}</div>
              <div>Undone</div>
            </div>
          </div>
          <div className="score-percent">
            {Math.floor(
              (todos.filter((todo) => todo.status).length / todos.length) * 100
            ) || '0'}
            % done
          </div>
        </div>
      </div>
    </>
  )
}

export default Stats

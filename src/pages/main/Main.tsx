import './Main.css'
import mountains from '../../assets/mountains.jpg'
import Task from '../../components/task/Task'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import TaskCreator from '../../components/taskCreator/TaskCreator'
import { useEffect, useRef, useState } from 'react'
import { changeFilter } from '../../features/filter/filterSlice'
import Filter from '../../components/filter/Filter'
import Stats from '../../components/stats/Stats'

const Main: React.FC = () => {
  const btnRef = useRef<HTMLDivElement>(null)
  const todos = useAppSelector((state) => state.todo.todos)
  const filter = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const [isOpened, setIsOpened] = useState(false)

  const taskRender = (
    { name, status, place, time }: Todo,
    id: number
  ): JSX.Element => (
    <Task name={name} status={status} place={place} time={time} id={id} />
  )

  const taskCompletedRender = (
    { name, status, place, time }: Todo,
    id: number
  ): JSX.Element =>
    status ? (
      <Task name={name} status={status} place={place} time={time} id={id} />
    ) : (
      <></>
    )

  const taskCurrentRender = (
    { name, status, place, time }: Todo,
    id: number
  ): JSX.Element =>
    !status ? (
      <Task name={name} status={status} place={place} time={time} id={id} />
    ) : (
      <></>
    )

  const hadleBtnMove = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    const targetDiv = e.target as HTMLDivElement

    if (btnRef.current) {
      btnRef.current.style.transform = `translateY(${targetDiv.scrollTop}px)`
    }
  }

  return (
    <div className="main-wrapper">
      <TaskCreator isOpened={isOpened} setIsOpened={setIsOpened} />

      <div className="header">
        <img src={mountains} alt="sky and mountains" className="sky-img" />
        <Stats todos={todos} />
      </div>
      <div className="main" onScroll={(e): void => hadleBtnMove(e)}>
        <span className="title">
          Tasks <Filter />
        </span>
        <div className="tasks">
          {filter.all ? todos.map(taskRender) : null}
          {filter.completed ? todos.map(taskCompletedRender) : null}
          {filter.current ? todos.map(taskCurrentRender) : null}
        </div>
        <div
          className="add-btn"
          onClick={(): void => setIsOpened(true)}
          ref={btnRef}
        ></div>
      </div>
    </div>
  )
}

export default Main

export type Todo = {
  name: string
  place: string
  time: string
  status: boolean
}

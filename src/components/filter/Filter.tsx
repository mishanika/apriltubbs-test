import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeFilter } from '../../features/filter/filterSlice'
import './Filter.css'

const Filter: React.FC = () => {
  const filter = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  return (
    <div className="filter">
      <div
        className={`all-tasks${filter.all ? ' active' : ''}`}
        onClick={(): { payload: string; type: 'filter/changeFilter' } =>
          dispatch(changeFilter('all'))
        }
      >
        All
      </div>
      <div
        className={`completed-tasks${filter.completed ? ' active' : ''}`}
        onClick={(): { payload: string; type: 'filter/changeFilter' } =>
          dispatch(changeFilter('completed'))
        }
      >
        Completed
      </div>
      <div
        className={`uncompleted-tasks${filter.current ? ' active' : ''}`}
        onClick={(): { payload: string; type: 'filter/changeFilter' } =>
          dispatch(changeFilter('current'))
        }
      >
        Current
      </div>
    </div>
  )
}

export default Filter

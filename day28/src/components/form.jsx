import {useDispatch, useSelector} from 'react-redux'
import { updatePlace, updatePlaceData } from '../actions';

const Form = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode)
  const place = useSelector(state => state.place)
  const dispatch = useDispatch()
    return (
      <div className="col-12 form">
        <input
          type="text"
          value={place}
          placeholder="Enter City"
          onChange={(e)=>{
            dispatch(updatePlace(e.target.value))
          }}
        />
        <button
          className={
            isDarkMode ? "btn dark btn-primary" : "btn light btn-primary"
          }
          onClick={dispatch(updatePlaceData(place))}
        >
          Search
        </button>
      </div>
    );
}

export default Form;
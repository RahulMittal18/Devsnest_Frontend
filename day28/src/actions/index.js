const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
    return (dispatch) => {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=f3bfc4c75db2479896d172441210608&q=${place}&days=2`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
            dispatch({
                type: "UPDATE_PLACE_DATA",
                payload: data,
          })
        });
  }
};


const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    }
}

const openForm = () => {
  return {
    type: "OPEN_FORM"
  }
}

export { updatePlace, updatePlaceData, toggleTheme, openForm };

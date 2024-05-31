import styled from "styled-components";
import WeatherCard from "./components/WeatherCard.jsx";
import WeatherHighlights from "./components/WeatherHighlights";
import useWeather from "./utils/getWeatherDetails.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeatherFailure,
  fetchWeatherStart,
  fetchWeatherSuccess,
} from "./redux/carts/weatherSlice.jsx";
import { useEffect, useState } from "react";

const AppContainer = styled.div`
  display: flex;
  width: 98vw;
  justify-content: center;
  align-items: center;
  background-color: #d3d0d0;
`;

const AppContent = styled.div`
  width: 60vw;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 30% 70%;
  overflow: hidden;
`;

function App() {
  const [activeTemp, setActiveTemp] = useState("C");
  const { location } = useSelector((state) => state.location);
  const dispatch = useDispatch();

  const { weather, loading, error } = useWeather(location || "");

  useEffect(() => {
    if (error) {
      dispatch(fetchWeatherFailure(error.message));
    } else if (loading) {
      dispatch(fetchWeatherStart());
    }
    dispatch(fetchWeatherSuccess(weather));
  }, [dispatch, weather, loading, error]);

  return (
    <AppContainer>
      <AppContent>
        <WeatherCard temp={activeTemp} />
        <WeatherHighlights temp={activeTemp} setTemp={setActiveTemp} />
      </AppContent>
    </AppContainer>
  );
}

export default App;

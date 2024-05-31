// useWeather.js
import { useState, useEffect } from "react";
import axios from "axios";
import { key } from "./apiKeys";
import { useDispatch } from "react-redux";
import { fetchWeatherSuccess } from "../redux/carts/weatherSlice";

const useWeather = (city) => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLongitudeLattitude = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };
  getLongitudeLattitude();

  useEffect(() => {
    if (city || !longitude || !latitude) return;
    const findLocation = async (latitude, longitude) => {
      if (longitude && longitude) {
        const api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
        );
        const data = await api_call.json();
        if (data) dispatch(fetchWeatherSuccess(data));
      }
    };
    findLocation(latitude, longitude);
  }, [latitude, longitude]);

  useEffect(() => {
    if (!city) return;
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        );
        setWeather(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};

export default useWeather;

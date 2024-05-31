import styled from "styled-components";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import dateBuilder from "./useDateBuilder";
import { demoLocation, unsplash_key } from "../utils/apiKeys";
import axios from "axios";
import b1 from "../assets/b1.png";

const WeatherCardContainer = styled.div`
  width: 90%;
  height: 90%;
  padding: 10px;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-around; */
  flex-direction: column;
  background-color: #fafafa;
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const WeatherInfoTop = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: black;
  flex-direction: column;
`;
const WeatherInfoMid = styled.div`
  position: relative;
  display: flex;
  color: black;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 150px;
  padding-left: 10px;
`;
const WeatherInfoBottom = styled.div`
  position: relative;
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: space-around;
`;
const Suffix = styled.sup`
  position: absolute;
  font-size: 60%;
  top: 5%;
`;

const Temperature = styled.div`
  font-size: 500%;
  font-weight: 400;
`;
const Time = styled.div`
  font-size: 12px;
`;
const Wrap = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
`;

const WeatherDescription = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  /* flex-direction: row; */
  font-size: 18px;
  color: #888;
`;

const Image = styled.img`
  width: 90%;
  max-height: 50%;
  margin-left: 10px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;
const Image2 = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const CenteredText = styled.div`
  width: 60%;
  position: absolute;
  top: 71%;
  left: 60%;
  transform: translate(-50%, -50%);
  color: #f5f1f1;
  font-size: 12px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

// eslint-disable-next-line react/prop-types
const WeatherCard = ({ temp }) => {
  const { weather } = useSelector((state) => state.weather);
  const [tempVal, setTempVal] = useState(0);
  const [locationImage, setLocationImage] = useState(demoLocation);
  const { day, currentTime } = dateBuilder(new Date());

  useEffect(() => {
    const val = Math.round(weather?.main.temp);
    if (temp === "C") setTempVal(val * (9 / 5) + 32);
    else setTempVal(val);
  }, [weather, temp]);

  const { location } = useSelector((state) => state.location);

  useEffect(() => {
    const getLocationImage = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${
          location || weather?.name
        }&client_id=${unsplash_key}`
      );
      setLocationImage(response.data.results[0].urls.raw);
    };
    getLocationImage();
  }, [location]);

  const iconUrl = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`;
  return (
    <WeatherCardContainer>
      <SearchBar />
      <WeatherInfo>
        <WeatherInfoTop>
          <Image2 src={b1} />
        </WeatherInfoTop>
        <WeatherInfoMid>
          <Temperature>
            {Math.floor(tempVal / 10) || 0}°
            <Suffix>{temp === "C" ? "C" : "F"}</Suffix>
          </Temperature>
          <WeatherDescription>
            <div style={{ fontWeight: "500", fontSize: "1em" }}>{day} ,</div>
            <Time>{currentTime}</Time>
          </WeatherDescription>
        </WeatherInfoMid>
        <WeatherInfoBottom>
          <Wrap>
            <img style={{ width: "40px" }} src={iconUrl} alt="" />
            <div>Mostly Cloudy</div>
          </Wrap>
          <Wrap>
            <img style={{ width: "40px" }} src={iconUrl} alt="" />
            <div>Rain - {Math.round(weather?.wind.speed) * 10}%</div>
          </Wrap>
          {locationImage && <Image src={locationImage} />}
          <CenteredText>
            {weather?.name} , {weather?.sys.country}
          </CenteredText>
        </WeatherInfoBottom>
      </WeatherInfo>
      {/* Add other elements here as needed */}
    </WeatherCardContainer>
  );
};

export default WeatherCard;

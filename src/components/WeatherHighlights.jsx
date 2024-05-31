import styled from "styled-components";
import Gauge from "./SemiCircleProgressBar";
import NavBar from "./Navbar";
import DaysCard from "./DaysCard";
import { useSelector } from "react-redux";
import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import w4 from "../assets/w4.png";
import w5 from "../assets/w5.png";
import w6 from "../assets/w6.png";
import w7 from "../assets/w7.png";

const HighlightsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 40% 60%;
  border-top: 1px solid #eee;
  background-color: #e8e6e6f3;
`;
const HighlightsTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #e8e6e6f3;
`;
const HighlightsBottom = styled.div`
  height: 80%;
  width: 115%;
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #e8e6e6f3;
`;
const Headline = styled.h1`
  color: black;
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Highlight = styled.div`
  width: 80%;
  max-width: 130px;
  height: 80%;
  margin: 5px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  background-color: #f9f9f9;
  border-radius: 10px;
  text-align: center;
`;
const HighlightAbove = styled.div`
  width: 80%;
  max-width: 130px;
  height: 80%;
  margin: 5px;
  padding-left: 5px;
  display: grid;
  grid-template-rows: 30% 70%;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const HighlightLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

const HighlightTitle = styled.div`
  font-size: 12px;
  font-style: normal;
  padding: 2px;
  color: #9d9c9c;
`;

const TextSmall = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin-left: 2px;
  color: #9d9c9c;
`;

const HighlightValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #333;
`;

const HighlightStatus = styled.div`
  display: flex;
  align-items: start;
  /* margin: 10px; */
  font-size: 14px;
  color: black;
`;
const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%; // Increase this value
  overflow-x: auto; // Add this to enable horizontal scrolling if needed
  padding: 10px;
  font-size: 14px;
  color: black;
`;

const Image = styled.img`
  width: 30px;
`;

// eslint-disable-next-line react/prop-types
const WeatherHighlights = ({ temp, setTemp }) => {
  const { weather } = useSelector((state) => state.weather);

  const weekDays = [
    { day: "Monday", pic: w1 },
    { day: "Tuesday", pic: w2 },
    { day: "Wednesday", pic: w3 },
    { day: "Thrusday", pic: w4 },
    { day: "Saturday", pic: w5 },
    { day: "Monday", pic: w6 },
    { day: "Sunday", pic: w7 },
  ];

  const getHours = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return `${hours > 12 ? hours - 12 : hours}:${minutes}`;
  };

  return (
    <HighlightsContainer>
      <HighlightsTop>
        <NavBar temp={temp} setTemp={setTemp} />
        <DayWrapper>
          {weekDays.map((ele) => {
            return <DaysCard key={ele.day} day={ele.day} i={ele.pic} />;
          })}
        </DayWrapper>
      </HighlightsTop>
      <div
        style={{
          width: "97%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <Headline>Todays Hightlights</Headline>
        <HighlightsBottom>
          <HighlightAbove>
            <HighlightTitle>UV Index</HighlightTitle>
            <HighlightValue>
              <Gauge value={Math.random()} />
            </HighlightValue>
          </HighlightAbove>
          <HighlightAbove>
            <HighlightTitle>Wind Status</HighlightTitle>
            <HighlightValue>
              <div style={{ display: "flex", alignItems: "end" }}>
                {weather?.wind.speed || Math.floor(Math.random() * 100)}
                <TextSmall>km/h</TextSmall>
              </div>
            </HighlightValue>
          </HighlightAbove>
          <HighlightAbove>
            <HighlightTitle>Sunrise & Sunset</HighlightTitle>
            <HighlightValue>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextSmall>
                  <Image src={w1} /> {getHours(weather?.sys.sunrise)} AM
                </TextSmall>
                <TextSmall>
                  <Image src={w1} /> {getHours(weather?.sys.sunset)} PM
                </TextSmall>
              </div>
            </HighlightValue>
          </HighlightAbove>
          <Highlight>
            <HighlightLeft>
              <HighlightTitle>Humidity</HighlightTitle>
              <HighlightValue>
                {weather?.main.humidity}
                <TextSmall style={{ alignItems: "start" }}>%</TextSmall>
              </HighlightValue>
              <HighlightStatus>Normal 🤙</HighlightStatus>
            </HighlightLeft>
          </Highlight>
          <Highlight>
            <HighlightLeft>
              <HighlightTitle>Visibility</HighlightTitle>
              <HighlightValue>
                {weather?.visibility / 1000}
                <TextSmall style={{ paddingBottom: "0px" }}>km</TextSmall>
              </HighlightValue>
              <HighlightStatus>Average 😒</HighlightStatus>
            </HighlightLeft>
          </Highlight>
          <Highlight>
            <HighlightLeft>
              <HighlightTitle>Air Quality</HighlightTitle>
              <HighlightValue>
                {Math.floor(Math.random() * (1000 - 10) + 10)}
              </HighlightValue>
              <HighlightStatus>Unhealthy 👎</HighlightStatus>
            </HighlightLeft>
            <div>right</div>
          </Highlight>
        </HighlightsBottom>
      </div>
    </HighlightsContainer>
  );
};

export default WeatherHighlights;

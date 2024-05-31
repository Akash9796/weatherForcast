/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  width: 8%;
  background-color: #eff2f2;
`;

const Day = styled.div`
  font-size: 8px;
  /* font-weight: bold; */
  /* margin-bottom: 5px; */
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const Temperatures = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Temperature = styled.div`
  font-size: 6px;
  color: ${(props) => (props.dark ? "#333" : "#999")};
`;
const Temperature2 = styled.div`
  font-size: 6px;
  color: ${(props) => (props.dark ? "#333" : "#999")};
  display: flex;
  flex-direction: column;
  height: 10px;
`;

const DaysCard = ({ day, i }) => {
 
  return (
    <CardWrapper>
      <Day>{day}</Day>
      <Image src={i} />
      <Temperatures>
        <Temperature dark>
          {Math.floor(Math.random() * (1000 - 500) + 500)}°
        </Temperature>
        <Temperature2>+-</Temperature2>
        <Temperature>{Math.floor(Math.random() * (500 - 0) + 0)}°</Temperature>
      </Temperatures>
    </CardWrapper>
  );
};

export default DaysCard;

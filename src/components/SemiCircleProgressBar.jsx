/* eslint-disable react/prop-types */
import styled from "styled-components";

const GaugeWrapper = styled.div`
  width: 90%;
  max-width: 250px;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  color: #004033;
`;

const GaugeBody = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background: #b4c0be;
  position: relative;
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  overflow: hidden;
`;

const GaugeFill = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: 100%;
  background: #009578;
  transform-origin: center top;
  transform: rotate(0.25turn);
  transition: transform 0.2s ease-out;
`;

const GaugeCover = styled.div`
  width: 75%;
  height: 150%;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25%;
  box-sizing: border-box;
`;

const TextSmall = styled.div`
  font-size: 15px;
  padding-bottom: 5px;
  /* bottom: 1px; */
`;

const Gauge = ({ value }) => {
  const validValue = value < 0 ? 0 : value > 1 ? 1 : value;

  return (
    <GaugeWrapper>
      <GaugeBody>
        <GaugeFill style={{ transform: `rotate(${validValue / 2}turn)` }} />
        <GaugeCover>
          <TextSmall>{`${Math.round(validValue * 100)}%`}</TextSmall>
        </GaugeCover>
      </GaugeBody>
    </GaugeWrapper>
  );
};

export default Gauge;

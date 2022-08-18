import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

function MapHeader() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <MapNavbar>
      <BackButton onClick={onClick}>
        <IoIosArrowBack size={25} color="#512DA8" />
      </BackButton>
      <NavbarName>리뷰쓰기</NavbarName>
    </MapNavbar>
  );
}

const MapNavbar = styled.div`
  width: 100%;
  height: 70px;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
  border-bottom: 2px solid #f5f5f5;
`;

const BackButton = styled.div`
  width: 60%;
  display: flex;
  margin-left: 5%;
`;

const NavbarName = styled.div`
  width: 100%;
  display: flex;
  text-align: center;

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};
  color: ${props => props.theme.mainPurple};
`;

export default MapHeader;

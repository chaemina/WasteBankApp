import React, { ReactNode } from 'react';
import Container from "../atoms/Container";
import CustomTitle from "../atoms/CustomTitle";
import MyMap from '../templates/MyMap';


type CardProps = {
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <>
            <CustomTitle>Custom</CustomTitle>
            <MyMap/>
        </>
    );
}

export default Card;

import React from "react";
import Splash from "../../components/common/atoms/Splash";
import { useNav } from "../../hooks/useNav";
import ScrollContainer from "../../components/common/atoms/ScrollContainer";


const SplashScreen = () => {

    const navigation = useNav();

    const moveLoginScreen = () => {
        navigation.push('Main');
    };

    return (
        <ScrollContainer>
            <Splash width={300} height={300} loop={false} onAnimationFinish={moveLoginScreen} />
        </ScrollContainer>
    );
};
export default SplashScreen;
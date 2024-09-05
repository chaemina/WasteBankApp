import React from "react";
import Splash from "../../components/common/atoms/Splash";
import { useNav } from "../../hooks/useNav";

const SplashScreen = () => {

    const navigation = useNav();

    const moveLoginScreen = () => {
        navigation.push('Main');
    };

    return (
        <>
            <Splash width={300} height={300} loop={false} onAnimationFinish={moveLoginScreen} />
        </>
    );
};
export default SplashScreen;
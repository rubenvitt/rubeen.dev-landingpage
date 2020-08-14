import React from "react";
import styles from './SourceCodeInfo.module.css';
import ReactLogo from './github.svg';

function SourceCodeInfo () {
    const redirect = () => document.location.href = 'https://github.com/rubenvitt/rubeen.dev-landingpage';

    return (
        <div onClick={redirect} className={styles.main}>
            <p><img draggable={"false"} src={ReactLogo} height={'50'} alt={'Github Logo'} /></p>
            <p>I'm hosted on Github</p>
        </div>
    )
}

export default SourceCodeInfo;

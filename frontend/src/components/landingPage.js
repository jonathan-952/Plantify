import styles from './landingPage.module.css';
import { useState, useEffect } from 'react';
import logo from '../images/logo.png';

export default function LandingPage() {
    
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])

    function SplashScreen() {
    return (
        <div className={styles.splash_container}>
            <img src={logo} alt = 'logo' id = {styles.logo}/>
            <div className={styles.small_container}>
                <p className={styles.small_text}>Growth Guaranteed</p>
                <div className={styles.loader}></div>
            </div>
        </div>
    )
    }

    return isLoading ? (
        <SplashScreen/>
    ) : (
        <div>
            <h1>Landing Page</h1>
        </div>
    )
}
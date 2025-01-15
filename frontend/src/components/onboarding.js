import { Link } from 'react-router';
import styles from './onboarding.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Onboarding() {
    const [progBar, setProgBar] = useState(1);

    function Message() {
        switch (progBar) {
            case 2:
                return (
                    <div className = {styles.text}>
                        <p className = {styles.big_text}>Easily track your plants' progress</p>
                        <p className = {styles.small_text}>Fill in our reports bi-weekly</p>
                    </div>
                )
            case 3:
                return (
                    <div className = {styles.text}>
                        <p className = {styles.big_text}>Plant doctors are here to help!</p>
                        <p className = {styles.small_text}>Have any questions? We are are here to help!</p>
                    </div>
                )
            default:
                return (
                    <div className = {styles.text}>
                        <p className = {styles.big_text}>Easy to report and earn</p>
                        <p className = {styles.small_text}>Fill, report, and earn from your hard work</p>
                    </div>
                )
        }
    }
    return (
        <div className = {styles.onboarding_container}>
            {/* back button goes here */}
            {
                progBar > 1 ? (
                    <FontAwesomeIcon icon={faArrowRight} id = {styles.back_arrow} rotation={180} size='2xl' onClick={() => {setProgBar(progBar - 1)}}/>
                ) : (null)
            }
            <Message/>
            <div className = {styles.prog_bar_container}>
                {/* progress bar goes here */}
                <div className = {`${styles.prog_bar} ${progBar === 1 ? styles.prog_active : null}`}></div>
                <div className = {`${styles.prog_bar} ${progBar === 2 ? styles.prog_active : null}`}></div>
                <div className = {`${styles.prog_bar} ${progBar === 3 ? styles.prog_active : null}`}></div>
            </div>
            {
                progBar === 3 ? (
                    <Link to = '/report'>
                        <button className = {styles.next_btn}>Get Started</button>
                    </Link> 
                ) : (
                    <button onClick = {() => {setProgBar(progBar + 1)}}  className = {styles.next_btn}>Next</button>
                )
            }
        </div>
    )
}
import styles from './home.module.css';
import {Link} from 'react-router-dom';

export default function HomePage() {
    const Plant = () => {
        return (
            <div className={styles.plant_container}>
                <div className={styles.shadow}></div>
                <div className={styles.plant}>
                    <div className={styles.leaf1}></div>
                    <div className={styles.leaf2}></div>
                    <div className={styles.leaf3}></div>
                    <div className={styles.stem}></div>
                </div>
            </div>
        )
    }

    return (
        <div className = {styles.home_container}>
            <h1>Home</h1>
            <Plant/>
            <p>Welcome!</p>
            <div className = {styles.button_container}>
                <Link to = '/report'>
                    <button className = {styles.nav_buttons}>Write Report</button>
                </Link>
                <Link to = '/profile'>
                    <button className = {styles.nav_buttons}>My Profile</button>
                </Link>
            </div>
        </div>
    )
}

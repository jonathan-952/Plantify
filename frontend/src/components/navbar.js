import LoginButton from './login';
import styles from './navbar.module.css';

export default function Navbar() {
    
    return (
        <div className = {styles.navbar_container}>
            <button>Home</button>
            <LoginButton/>
        </div>
    )
}
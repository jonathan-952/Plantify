import styles from './navbar.module.css';

export default function Navbar() {
    
    return (
        <div className = {styles.navbar_container}>
            <button>Home</button>
            <button>Login</button>
        </div>
    )
}
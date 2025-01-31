import styles from './profile.module.css';
import { useState } from 'react';

export default function Profile() {
    const [isUpdated, setUpdate] = useState(false);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        age: '',
        gender: '',
    });

    const handleInputChange = (e) => {
        // eventually with db setup, query for profile info and disable update button when info is the same
        // i.e when they change something but revert those changes
        setUpdate(true);
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            // once update profile endpoint is up, add it here
        }
    }

    return (
        <div id = {styles.body}>
            {/* pfp goes here */}
            <div id = {styles.form_container}>
                <h1>My Profile</h1>
                <form id = {styles.data_entry} onSubmit = {handleSubmit}>
                    <label htmlFor = "fname" className = {styles.form_labels}>First Name</label>
                    <input type="text" name="fname" value = {formData.fname} onChange= {handleInputChange} className = {styles.form_input} required></input>
                    <label htmlFor = "lname" className = {styles.form_labels}>Last Name</label>
                    <input type="text" name="lname" value = {formData.lname} onChange={handleInputChange} className = {styles.form_input} required></input>
                    <label htmlFor = "email" className = {styles.form_labels}>Email Address</label>
                    <input type="text" name="email" value = {formData.email} onChange={handleInputChange} className = {styles.form_input} required></input>
                    <label htmlFor = "age" className = {styles.form_labels}>Age</label>
                    <input type="text" name="age" value = {formData.age} onChange={handleInputChange} className={styles.form_input} required></input>
                    <label className = {styles.form_labels}>Gender</label>
                    <div className = {styles.radio_btns}>
                        <input name="gender" type="radio" checked = {formData.gender === 'male'} value = "male" id='male' onChange = {handleInputChange} className = {styles.radio_btn}/>
                        <label htmlFor='male'>Male</label>
                        <input name="gender" type="radio" checked = {formData.gender === 'female'} value = "female" id='female' onChange = {handleInputChange} className = {styles.radio_btn}/>
                        <label htmlFor='female'>Female</label>
                        <input name="gender" type="radio" checked = {formData.gender === 'other'} value = "other" id='other' onChange = {handleInputChange} className = {styles.radio_btn}/>
                        <label htmlFor='other'>Other</label>
                    </div>
                    <input type="submit" value="Update" className = {`${styles.form_submit} ${isUpdated ? styles.update_active : styles.update_inactive}`}></input>
                </form>
            </div>
        </div>
    )
}
import { useState } from 'react';
import styles from './form.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function WriteReport() {
    const [isSubmitted, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        picture: null,
        date: '',
        seedID: '',
        height: '',
        issues: '',
        germinated: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    };

    const handlePic = (e) => {
        setFormData({...formData, picture: e.target.files[0]})
    }

    const handleSubmit = async (e) =>  {
        e.preventDefault();

        if (e.target.checkValidity()) {
            setSubmit(true);
        }

        // try {
        //     await axios.post('/api/progress', {
        //         progressDetail: formData,
        //         status: 'submitted'})
        // } catch (err) {
        //     console.log(err.message);
        // }
    }

    return (
        <div id = {styles.body}> 
            <div id = {styles.form_container}>
                <h2>Write Report</h2>
                <form id = {styles.data_entry} onSubmit = {handleSubmit}>
                    <label htmlFor = "picture" className = {styles.form_labels}>Upload Picture</label>
                    <input type="file" name="picture" id={styles.data1} onChange={handlePic} accept=".jpg, .jpeg, .png" required></input>
                    <label htmlFor = "date" className = {styles.form_labels}>Date</label>
                    <input type="date" name="date" value = {formData.date} onChange={handleInputChange} className = {styles.form_input} required></input>
                    <label htmlFor = "seedID" className = {styles.form_labels}>Seed ID #</label>
                    <input type="text" name="seedID" value = {formData.seedID} onChange={handleInputChange} className = {styles.form_input} required></input>
                    <label htmlFor = "height" className = {styles.form_labels}>Plant Height</label>
                    <input type="text" name="height" value = {formData.height} onChange={handleInputChange} className={styles.form_input} required></input>
                    <label htmlFor = "issues" className = {styles.form_labels}>Any visible issues</label>
                    <input type="text" name="issues" value = {formData.issues} onChange={handleInputChange} className = {styles.form_input}></input>
                    <label className = {styles.form_labels}>Has your seed germinated?</label>
                    <div className = {styles.radio_btns}>
                        <label className={styles.radio}>
                            <input name="germinated" type="radio" checked = {formData.germinated === 'Yes'} value = "Yes" onChange = {handleInputChange}/>
                            <span>yes</span>
                        </label>
                        <label className={styles.radio}>
                            <input name="germinated" type="radio" checked = {formData.germinated === 'No'} value = "No" onChange = {handleInputChange}/>
                            <span>no</span>
                        </label>
                    </div>
                    <div>
                        {
                            !isSubmitted ? (
                                <input type="submit" value="Submit Report" id = {styles.form_submit} className = {styles.form_labels}></input>
                            ) : (
                                <Link to = '/home'>
                                    <button id = {styles.form_submit} className = {styles.form_labels}>Return to Home</button>
                                </Link>
                            )
                        }  
                     </div>
                </form>
            </div>
        </div>
    )
}
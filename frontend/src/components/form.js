import styles from './form.module.css';

export default function WriteReport() {
    return (
        <div id = {styles.form_container}>
            <h2>Write Report</h2>
            <form id = {styles.data_entry} action = "/submit_report">
                <label for = "data-1" className = {styles.form_labels}>Upload Picture:</label>
                <input type="file" name="data-1" id={styles.data1}className = {styles.form_input} required></input>
                {/* could make autofill today's date on default*/}
                <label for = "data-2" className = {styles.form_labels}>Date:</label>
                <input type="text" name="data-2" className = {styles.form_input} placeholder="Date:" required></input>
                <label for = "data-3" className = {styles.form_labels}>Seed ID #:</label>
                <input type="text" name="data-3" className = {styles.form_input} placeholder="Seed ID #" required></input>
                <label for = "data-4" className = {styles.form_labels}>Plant Height:</label>
                <input type="text" name="data-4" className = {styles.form_input} placeholder="Plant Height" required></input>
                <label className = {styles.form_labels}>Has your seed germinated?</label>
                <div className = {styles.radio_btns}>
                    <label class="radio">
                        <input name="radio" type="radio"/>
                        <span>yes</span>
                    </label>
                    <label class="radio">
                        <input name="radio" type="radio"/>
                        <span>no</span>
                    </label>
                </div>
                <button type = "button">Save</button>
                <input type="submit" value="Submit Report" id = {styles.form_submit}></input>
            </form>
        </div>
    )
}
import React from 'react'
import { useState } from 'react';
import {
    Paper,
    FormControl,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        width: "100%",
        heigth: "1rem",
        marginBottom: "1rem"
    },
    button: {

        marginRight: '1rem'
    },
    color:{
        color:'red'
    }

}


const Form = (props) => {
    const { initialName, onSubmitProp ,errors} = props;
    const [name, setName] = useState(initialName);
    // console.log(errors);
    // console.log(initialName);

    const handlerForm = (e) => {
        e.preventDefault();
        onSubmitProp({ name });
        // console.log(name);
        setName('');

    }
    return (
        <div >

            
            <Paper elevation={5} style={styles.paper}>
            {errors.map((err, index) => <p style={styles.color} key={index}>{err}</p>)}
                <form onSubmit={handlerForm}>
                    <FormControl variant="outlined" style={styles.input}>
                        <label>Name:</label>
                        <OutlinedInput type="text" onChange={e => { setName(e.target.value) }} value={name} />
                    </FormControl>
                    <div>
                        <Button style={styles.button} type="cancel" variant="contained" color="primary">
                            Cancel
                        </Button>
                        <Button style={styles.button} type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>

                </form>
            </Paper>
        </div>
    )
}

export default Form
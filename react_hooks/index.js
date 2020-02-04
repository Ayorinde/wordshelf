import React, {useState} from 'react';
import {TextInput} from 'react-native'

export function useTextInput (){
    const [value, setValue] = useState('');
    const onChangeText = (text) =>{
        setValue(text);
    }
    return{onChangeText, value}
}


// import React, { useState } from 'react';
// export function useInput() {
//     const [value, setValue] = useState('');
//     const onChange = (e) => {
//         setValue(e.target.value);
//     }
//     return {
//         onChange,
//         value,
//     }
// }


// const email = useInput();
// const password = useInput();
// const fname = useInput();
// const lname = useInput();
// const [formValues, setFormValues] = useState(null)

// const [signup, { data, loading, error }] = useMutation(SIGNUP);

// <input type="text" className="form-control" id="fname"
// {...lname}
// placeholder="Last name" />


{/* <TextInput
  underlineColorAndroid={'transparent'}
  style={styles.searchInput}
  value={this.state.searchString}
  onChange={this._onSearchTextChanged}
  placeholder='Search via name or postcode'/> */}
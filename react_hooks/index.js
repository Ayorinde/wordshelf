import React, {useState} from 'react';
import {TextInput} from 'react-native'

export function useTextInput (){
    const [value, setValue] = useState('');
    const onChangeText = (text) =>{
        setValue(text);
    }
    return{onChangeText, value}
}
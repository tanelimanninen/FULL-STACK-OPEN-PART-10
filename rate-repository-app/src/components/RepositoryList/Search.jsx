import { useState } from 'react';
import { StyleSheet, View, TextInput as NativeTextInput } from "react-native"
//import { useDebouncedCallback } from 'use-debounce';
import theme from "../../theme";

const styles = StyleSheet.create({
    searchContainer: {
      alignItems: "center",
      justifyContent: "center"
    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: theme.colors.cardBG,
        borderColor: theme.colors.borderInput,
        borderWidth: 2.5,
        borderRadius: 10,
        padding: 10,
    },
});


const Search = ({ onSearch }) => {
    const [text, setText] = useState('');
    //const [debouncedCallback] = useDebouncedCallback((value) => onSearch(value), 500);

    const handleChangeText = (value) => {
        setText(value);
        //debouncedCallback(value);
        onSearch(value);
    };

    return (
        <View style={styles.searchContainer}>
            <NativeTextInput
              style={styles.input} 
              placeholder="Search here..."  
              onChangeText={handleChangeText}
              value={text}
            />
        </View>
    )
};

export default Search;
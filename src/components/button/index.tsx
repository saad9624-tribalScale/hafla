import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Colors, Fonts } from '../../utils';


const Button = ({ heading }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{heading}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.pink,
        height: 50,
        width: '90%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10

    },
    text: {
        color: 'white',
        fontFamily: Fonts.semiBold,
        fontSize: 16
    }
})

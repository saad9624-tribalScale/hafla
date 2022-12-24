import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles';
import { Images } from '../../utils';
const Header = ({ isHome, showNotification, heading }) => {
    return (
        <SafeAreaView style={styles.container}>
            {isHome ? <View style={styles.row}>
                <View style={styles.image} />
                <Text style={styles.userName}>Hello! John</Text>
            </View> :
                <View style={styles.row}>
                    <TouchableOpacity >
                        <Image style={styles.back} source={Images.back} />
                    </TouchableOpacity>
                    <Text style={styles.userName}>{heading}</Text>
                </View>}


            <View style={styles.row}>
                <Image style={styles.actionImage} source={Images.heart} />
                {showNotification && <Image style={styles.actionImage} source={Images.notification} />}
            </View>

        </SafeAreaView>
    )
}

export default Header



import { SafeAreaView, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './styles';
import { Header } from '../../components';
import { Colors, Images } from '../../utils';

const DiscoverPeople = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header heading='My Events' />

            {['Marry Trabani', 'Brooklyn Simmons'].map((item) => {
                return (
                    <View>
                        <Text style={styles.day}>Yesterday</Text>
                        <View style={styles.itemContainer}>
                            <Image style={styles.userProfile} source={Images.discoverParty} />
                            <View style={styles.btnView}>

                                <View style={styles.rowJustified}>
                                    <View>
                                        <Text style={styles.type}>Beach Party</Text>
                                        <Text style={styles.name}>{item}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.btn}>
                                        <Image source={Images.Plus} style={styles.addBtn} />
                                        <Text style={styles.btnText}>Add</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.row}>
                                    <View style={styles.rowJustified}>
                                        <View style={styles.row}>
                                            <Image style={styles.profile} source={Images.profile} />
                                            <Text style={styles.userName}>Micheal Hike</Text>
                                        </View>
                                        <Text style={styles.attended}>Decline</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                )
            })}
        </SafeAreaView>
    )
}

export default DiscoverPeople



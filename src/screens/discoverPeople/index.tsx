import { SafeAreaView, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './styles';
import { Header } from '../../components';
import { Colors, Images } from '../../utils';

const DiscoverPeople = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header heading='Discover People' />

            <View style={styles.tabView}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.btnText}>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, { backgroundColor: Colors.pink }]}>
                    <Text style={styles.btnText}>Friend Requests</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.heading}>New Latest</Text>

            {['Marry Trabani', 'Brooklyn Simmons'].map((item) => {
                return (
                    <View style={styles.itemContainer}>
                        <Image style={styles.userProfile} source={Images.profile} />
                        <View style={styles.btnView}>
                            <View style={[styles.rowJustified, { marginTop: 0 }]}>
                                <Text style={styles.name}>{item}</Text>
                                <Text style={styles.time}>3h ago</Text>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.rowJustified}>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text style={styles.btnText}>Accept</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'transparent' }}>aa</Text>
                                    <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.lightBlack }]}>
                                        <Text style={styles.btnText}>Decline</Text>
                                    </TouchableOpacity>
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



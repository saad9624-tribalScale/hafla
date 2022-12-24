import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Button, GuestSection, Header } from '../../components';
import styles from './styles';
import { Images } from '../../utils';
import { lorem } from '../../utils/constant';

const PartyDetail = () => {

    const RenderPartyDetail = ({ number, value }) => {
        return <View style={styles.alignRow}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header heading={"Party Details"} />
            <ScrollView>
                <Image style={styles.cover} source={Images.discoverParty} />
                <View style={styles.descriptionView}>
                    <View style={styles.partyDetail} >
                        <View>
                            <Text style={styles.partyType}>Beach Party</Text>
                            <Text style={styles.partyTitle}>Sunday Beach Party</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.entry}>Entry:</Text>
                            <Text style={styles.entryFee}> $ 15 </Text>

                        </View>

                    </View>

                    <View style={styles.profileDetail}>

                        <View style={styles.row}>
                            <Image style={styles.profile} source={Images.profile} />
                            <Text style={styles.userName}>Micheal Hike</Text>
                        </View>

                        <TouchableOpacity style={styles.requestBtn}>
                            <Image source={Images.groupChat} style={styles.chat} />
                            <Text style={styles.requetTxt}>Group Chat</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={styles.detailView}>
                    <RenderPartyDetail number={'18'} value={'Guest'} />
                    <View style={styles.line} />
                    <RenderPartyDetail number={'11:30 P.M'} value={'Time'} />
                    <View style={styles.line} />
                    <RenderPartyDetail number={'15, May'} value={'Date'} />
                </View>


                <View style={styles.description}>
                    <Text style={styles.descriptionText}>Description</Text>
                    <Text style={styles.detailText}>{lorem}</Text>
                </View>

                <View style={styles.locationView}>

                    <Text style={styles.descriptionText}>Location</Text>
                    <Image style={styles.map} source={Images.Map} />
                </View>

                <GuestSection />
                <Button heading='Request a Spot' />

            </ScrollView>

        </SafeAreaView>
    )
}

export default PartyDetail



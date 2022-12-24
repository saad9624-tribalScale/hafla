import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Images } from '../../utils';
import styles from './styles';

const DiscoverParty = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={Images.discoverParty} />
            </View>
            <View style={styles.detailView}>
                <View style={styles.nameView}>
                    <View>
                        <Text style={styles.partyType}>Beaach Party</Text>
                        <Text style={styles.title}>{item}</Text>

                    </View>

                    <View style={styles.likeView}>
                        <TouchableOpacity>
                            <Image style={styles.like} source={Images.heart} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.dot} source={Images.dot} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.locationView}>
                    <View style={styles.row}>
                        <Image style={styles.profile} source={Images.profile} />
                        <Text style={styles.userName}>Micheal Hike</Text>
                    </View>
                    <View style={styles.row}>
                        <Image style={styles.location} source={Images.location} />
                        <Text style={styles.range}>4-4.5 Km</Text>
                    </View>
                </View>

                <View style={styles.actionView}>
                    <TouchableOpacity style={styles.entryBtn}>
                        <Text style={styles.entryText}>5 Entry</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'transparent' }}>aa</Text>
                    <TouchableOpacity style={styles.requestBtn}>
                        <Text style={styles.requetTxt}>Request a Spot</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}

export default DiscoverParty


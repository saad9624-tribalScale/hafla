import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../../utils';
import styles from './styles';


const GuestSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Guests :  </Text>
            {['John MArshal', 'Meesha Bhora', 'Hassle Reel', 'Ramos Shine'].map((item) => {
                return (
                    <View style={styles.guestItem}>
                        <View style={styles.row}>
                            <Image style={styles.profile} source={Images.profile} />
                            <Text style={styles.userName}>{item}</Text>
                        </View>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Interested</Text>
                        </TouchableOpacity>

                    </View>
                )
            })}
        </View>
    )
}

export default GuestSection



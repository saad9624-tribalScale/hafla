import { Text, View, Image } from 'react-native'
import { Images } from '../../utils';
import styles from './styles';

const VideoClips = ({ item, index }) => {
    if (index === 0) {
        return (
            <View style={styles.trendingContainer}>
                <Image style={styles.trendingNow} source={Images.trendingNow} />
                <Text style={styles.text}>Trending</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text></Text>
            <View style={styles.new}>
                <Text style={styles.newText}>New</Text>
            </View>
        </View>
    )

}

export default VideoClips


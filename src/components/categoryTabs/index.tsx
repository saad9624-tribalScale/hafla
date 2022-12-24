import { Image, Text, View } from 'react-native'
import styles from './styles';

const CategoryTab = ({ item, index }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.tabName}>{item.name}</Text>
        </View>
    )
}

export default CategoryTab



import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Header } from '../../components';
import styles from './styles';

const Location = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header showFav={false} heading="Location" />
        </SafeAreaView>
    )
}

export default Location



import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { JSX } from 'react'
import { router } from 'expo-router'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
    router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Illo incidunt corporis aperiam assumenda voluptas ratione. Nostrum sapiente enim explicabo reprehenderit!
                Repellat, magnam? Fugiat quod error explicabo inventore dolorem et architecto.
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 160, bottom: 'auto' }}>
                <Icon name="pencil" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    memoDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFFFFF'
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import { JSX } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../config'
import { router } from 'expo-router'

const handlePress = (): void => {
    signOut(auth)
    .then(() => {
        router.replace('/auth/log_in')
    })
    .catch(() => {
        Alert.alert('ログアウトに失敗しました')
    })
}

const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: 'rgba(0, 0, 0, 0.7)'
    }
})

export default LogOutButton
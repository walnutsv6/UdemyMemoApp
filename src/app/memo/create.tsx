import { View, TextInput, StyleSheet } from 'react-native'
import { JSX, useState } from 'react'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { db, auth } from '../../config'

const handlePress = (bodyText: string): void => {
    if (auth.currentUser === null) {
        return
    }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then((docRef) => {
        console.log('success', docRef.id)
        router.back()
    })
    .catch((error) => {
        console.error(error)
    })
}

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.InputContainer}>
                <TextInput style={styles.input} value={bodyText} onChangeText={(text) => setBodyText(text)} multiline autoFocus />
            </View>
            <CircleButton onPress={() => handlePress(bodyText)}>
                <Icon name="check" size={40} color="#ffffff" />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    InputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        // Androidでは反映されるが、iOSでは反映されない
        textAlignVertical: 'top'
    }
})

export default Create
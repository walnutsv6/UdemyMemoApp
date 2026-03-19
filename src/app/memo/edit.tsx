import { View, TextInput, StyleSheet, Alert} from 'react-native'
import { JSX, useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { getDoc, setDoc, doc, Timestamp } from 'firebase/firestore'

import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { db, auth } from '../../config'

const handlePress = (id: string, bodyText: string): void => {
    // 保存処理
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
    setDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then(() => {
        router.back()
    })
    .catch((error) => {
        console.log(error)
        Alert.alert('更新に失敗しました')
    })
}

const Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [bodyText, setBodyText] = useState('')
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
        getDoc(ref)
        .then((docRef) => {
            const RemoteBodyText = docRef?.data()?.bodyText
            setBodyText(RemoteBodyText)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    console.log('edit: ', id)
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.input}
                    value={bodyText}
                    multiline
                    onChangeText={(text) => setBodyText(text)}
                    autoFocus
                />
            </View>
            <CircleButton onPress={() => handlePress(id, bodyText)}>
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
        flex: 1
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        paddingHorizontal: 27,
        // Androidでは反映されるが、iOSでは反映されない
        textAlignVertical: 'top'
    }
})

export default Edit
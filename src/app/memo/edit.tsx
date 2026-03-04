import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { JSX } from 'react'
import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
    // 保存処理
    router.back()
}

const Edit = (): JSX.Element => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <View style={styles.InputContainer}>
                <TextInput style={styles.input} value={'買い物\nリスト'} multiline />
            </View>
            <CircleButton onPress={handlePress}>
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

export default Edit
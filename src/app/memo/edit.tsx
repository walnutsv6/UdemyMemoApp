import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { JSX } from 'react'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const Edit = (): JSX.Element => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <Header />
            <View style={styles.InputContainer}>
                <TextInput style={styles.input} value={'買い物\nリスト'} multiline />
            </View>
            <CircleButton>
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
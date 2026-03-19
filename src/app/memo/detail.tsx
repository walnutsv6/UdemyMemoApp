import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { JSX, useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'

import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
    router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
    const {id} = useLocalSearchParams()
    // console.log('memo id: ', id)
    const [memo, setMemo] = useState<Memo | null>(null)
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            const { bodyText, updatedAt } = memoDoc.data() as Memo
            setMemo({
                id: memoDoc.id,
                bodyText,
                updatedAt
            })
        })
        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
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
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        color: '#000000'
    }
})

export default Detail
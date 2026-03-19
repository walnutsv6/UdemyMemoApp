import { View, Text, TouchableOpacity, StyleSheet , Alert } from 'react-native'
import { JSX } from 'react'
import { Link } from 'expo-router'
import { deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../config'
import Icon from './icon'
import { type Memo } from '../../types/memo'

interface Props {
    memo: Memo
}

const handlePress = (id: string): void => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
    Alert.alert('メモを削除しますか？', '削除すると元に戻すことはできません。', [
        { text: 'キャンセル', style: 'cancel' },
        { text: '削除する', style: 'destructive', 
            onPress: () => {
                deleteDoc(ref)
                .then(() => {
                    console.log('deleted memo: ', id)
                })
                .catch((error) => {
                    console.log(error)
                    Alert.alert('削除に失敗しました')
                })
            }
        }
    ])
}

const MemoListItem = (props: Props): JSX.Element => {
    const { memo } = props
    const { bodyText, updatedAt } = memo
    if (bodyText === null || updatedAt === null) { return null }
    const dateString = updatedAt.toDate().toLocaleString('ja-JP')
    return (
        <Link
            href={{ pathname: '/memo/detail', params: { id: memo.id } }}
            asChild
        >
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dateString}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handlePress(memo.id)}>
                        <Icon name="delete" size={32} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)'
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }
})

export default MemoListItem
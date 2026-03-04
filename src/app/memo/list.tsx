import { View, StyleSheet } from 'react-native'
import { JSX } from 'react'
import { router } from 'expo-router'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
    // 新規メモ画面へ移動
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* ヘッダー */}
            {/* メモリスト */}
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>

            {/* 追加ボタン */}
            <CircleButton onPress={handlePress}>
                <Icon name="plus" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})

export default List
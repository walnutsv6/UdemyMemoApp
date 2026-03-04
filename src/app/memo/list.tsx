import { View, StyleSheet } from 'react-native'
import { JSX } from 'react'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import LogOutButton from '../../components/LogOutButton'

const handlePress = (): void => {
    // 新規メモ画面へ移動
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <LogOutButton />
            }
        })
    }, [])
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
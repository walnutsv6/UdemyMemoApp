import { View, StyleSheet } from 'react-native'
import { JSX } from 'react'

import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'
import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* ヘッダー */}
            <Header />
            {/* メモリスト */}
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>

            {/* 追加ボタン */}
            <CircleButton>＋</CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})

export default Index
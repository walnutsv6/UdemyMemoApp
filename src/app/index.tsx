import { View, Text, StyleSheet } from 'react-native'
import { JSX } from 'react'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                {/* ヘッダー */}
                <View>
                    <Text>Memo App</Text>
                    <Text>ログアウト</Text>
                </View>
            </View>
            <View>
                {/* メモリスト */}
                <View>
                    <Text>買い物リスト</Text>
                    <Text>2023年10月1日 10:00</Text>
                </View>
                <View>
                    <Text>X</Text>
                </View>

                <View>
                    <Text>買い物リスト</Text>
                    <Text>2023年10月1日 10:00</Text>
                </View>
                <View>
                    <Text>X</Text>
                </View>

                <View>
                    <Text>買い物リスト</Text>
                    <Text>2023年10月1日 10:00</Text>
                </View>
                <View>
                    <Text>X</Text>
                </View>

            </View>

            {/* 追加ボタン */}
            <View>
                <Text>＋</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Index
import { Stack } from 'expo-router'
import { JSX } from 'react'

const Layout = (): JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#467FD3'
        },
        headerTintColor: '#FFFFFF',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            color: '#FFFFFF',
            fontSize: 22,
            fontWeight: 'bold'
        }
    }} />
}

export default Layout
import { Redirect } from "expo-router"
import {JSX} from "react"

const Index = (): JSX.Element => {
    return <Redirect href="/auth/sign_up" />
}

export default Index
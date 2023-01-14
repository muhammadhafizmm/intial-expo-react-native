import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native'
import React, { Children, Component, useEffect, useMemo } from 'react'
import { DefaultWidthSize } from './types'
import { em, rem } from '../lib/ui/unit'

const createStyle = () => {
    return StyleSheet.create({
        main: {
            flex: 1,
            alignItems: "center",
        },
        container: {
            flex: 1,
            ...Platform.select({
                web: {
                    width: "100%",
                    maxWidth: DefaultWidthSize.mobile,
                },
                native: {
                    width: "100%",
                }
            })
        }
    })
}

export type Props = {
    children?: React.ReactNode
}

const Container: React.FC<Props> = ({
    children
}) => {
    // create default style
    const style = useMemo(() => createStyle(), [])
    return (
        <SafeAreaView style={style.main}>
            <View style={style.container}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Container
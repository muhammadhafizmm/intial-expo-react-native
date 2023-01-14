import { View, Text, StyleSheet, Button, Platform, SafeAreaView } from 'react-native'
import React, { useEffect, useMemo } from 'react'

const createStyle = () => {
    return StyleSheet.create({
        container: {
            width: "100%",
            ...Platform.select({
                web: {
                    height: "100vh"
                },
                native: {
                    height: "100%"
                }
            })
        },
        body: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
}

const NoteList: React.FC<{}> = () => {
    const style = useMemo(() => createStyle(), [])
    return (
        <SafeAreaView>
            <View style={style.container}>
                <View style={style.body}>
                    <Text>Note List</Text>
                    <Button title='go to home screen' onPress={() => 5}></Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NoteList
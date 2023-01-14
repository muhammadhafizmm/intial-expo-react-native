import { View, Text, StyleSheet, Button, Platform, FlatList, ListRenderItem } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { rem } from '../../lib/ui/unit'
import { Font } from '../../lib/ui/font'
import { TextSize } from '../../lib/ui/textSize'
import { Spacing } from '../../lib/ui/spacing'

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
        },
        containerTitle: {
            fontFamily: Font.Black,
            fontSize: TextSize.h4,
            margin: Spacing.xsmall * 4
        },
        noteItemsContainer: {
            flex: 1,
            alignItems: 'center',
            marginBottom: Spacing.base
        },
        noteItems: {
            borderRadius: 5,
            width: "90%",
            padding: Spacing.base,
            backgroundColor: "white",

        },
        title: {
            fontFamily: Font.Black,
            fontSize: TextSize.h6,
            marginBottom: Spacing.xsmall
        },
        note: {
            fontSize: TextSize.caption
        },
    })
}

const DATA = [
    {
        noteTitle: "Hello World",
        noteBody: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dolorem quas unde, nobis velit alias molestiae, quisquam non impedit magnam doloremque cum perspiciatis consequuntur aperiam. Ipsum in sint illo officia?"
    },
    {
        noteTitle: "Hello World",
        noteBody: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dolorem quas unde, nobis velit alias molestiae, quisquam non impedit magnam doloremque cum perspiciatis consequuntur aperiam. Ipsum in sint illo officia?"
    },
    {
        noteTitle: "Hello World",
        noteBody: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dolorem quas unde, nobis velit alias molestiae, quisquam non impedit magnam doloremque cum perspiciatis consequuntur aperiam. Ipsum in sint illo officia?"
    },
]

const LandingPage: React.FC<{}> = () => {
    const style = useMemo(() => createStyle(), [])

    const renderNoteList: ListRenderItem<{
        noteTitle: string,
        noteBody: string
    }> = ({ item }) => (
        <View style={style.noteItemsContainer}>
            <View style={style.noteItems}>
                <Text style={style.title}>{item.noteTitle}</Text>
                <Text style={style.note}>{item.noteBody}</Text>
            </View>
        </View>
    )

    return (
        <View style={style.container}>
            <Text style={style.containerTitle}>Note List</Text>
            <View style={style.body}>
                <FlatList
                    data={DATA}
                    renderItem={renderNoteList}
                >
                </FlatList>
            </View>
        </View>
    )
}

export default LandingPage
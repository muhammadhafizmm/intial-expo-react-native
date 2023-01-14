import { View, Text, StyleSheet, Button, Platform, FlatList, ListRenderItem } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { rem } from '../../lib/ui/unit'
import { Font } from '../../lib/ui/font'
import { TextSize } from '../../lib/ui/textSize'

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
            margin: rem(2)
        },
        noteItemsContainer: {
            flex: 1,
            alignItems: 'center'
        },
        noteItems: {
            borderRadius: 5,
            width: "90%",
            padding: rem(1),
            backgroundColor: "white",
            marginBottom: rem(0.5)

        },
        title: {
            fontFamily: Font.Black,
            fontSize: TextSize.h6,
            marginBottom: rem(0.5)
        },
        note: {
            fontSize: TextSize.caption
        }
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
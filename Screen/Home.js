import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Home() {
    return (
        <View style={styles.Body}>
            <View style={styles.Meanbody}>
                <View style={styles.Note}>

                </View>
                <View style={styles.Result}>
                    <Text style={styles.ResultShow}>Result</Text>
                </View>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Body: {
        height: '100%',
        width: '100%',
        marginTop: '1%',
        alignItems: 'center',


    },
    Meanbody: {
        height: '30%',
        width: '90%',
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 0
    },
    Note: {
        height: '68%',
        width: '90%',
        backgroundColor: 'white',
        margin: '2%',
        borderRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 0
    },
    Result: {
        height: '18%',
        width: '90%',
        backgroundColor: 'white',
        justifyContent: 'center',
        margin: '2%',
        borderRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 0
    },
    ResultShow: {
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: '80%',
        shadowOffset: { height: 5, width: 0 }
    }
});


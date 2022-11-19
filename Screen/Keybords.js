import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Keybords() {
  return (
    <View style={styles.Body}>
      <View style={styles.ButtonBody}>
        <View style={styles.ButtonBox}>
          <View style={styles.ButtonCkeck}>
            <Text style={styles.ButtonPress}>C</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>( )</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>%</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>/</Text>
          </View>
        </View>

        <View style={styles.ButtonBox}>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>7</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>8</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>9</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>X</Text>
          </View>
        </View>

        <View style={styles.ButtonBox}>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>4</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>5</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>6</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>-</Text>
          </View>
        </View>

        <View style={styles.ButtonBox}>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>1</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>2</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>3</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>+</Text>
          </View>
        </View>

        <View style={styles.ButtonBox}>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>+/-</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>0</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>.</Text>
          </View>
          <View style={styles.ButtonCkeck}>
          <Text style={styles.ButtonPress}>=</Text>
          </View>
         
        </View>

      </View>

    </View>
  )
}

export default Keybords


const styles = StyleSheet.create({
  Body: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ButtonBody: {
    height: '40%',
    width: '95%',
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { height: 5, width: 2 },
    shadowColor: '#000',
    shadowOpacity: 15,
    elevation: 0
  },
  ButtonBox: {
    height: '15%',
    width: '90%',
    margin: '2%',
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  ButtonCkeck: {
    height: '90%',
    width: '15%',
    margin: '3%',
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    shadowOffset: { height: 5, width: 0 },
    shadowColor:'#000',
    shadowOpacity:10,
    shadowRadius:10,
    elevation:0
  },
  ButtonPress:{
    color: 'white',
    fontSize:20,
    fontWeight: "bold",
    shadowOffset:{height:5,width:3},
    shadowColor:'#000',
    shadowOpacity:10,
    shadowRadius:10
  }
});
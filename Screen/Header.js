import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, } from 'react-native';
import ima from '../Photo/calculator.png';
import Cross from '../Photo/cross.png';
import Manu from '../Photo/manu.png';

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.Header1}>
        <View style={styles.Header2}>
          <View style={{
            height: '85%',
            width: '25%'
          }}>
            <Image source={ima} style={styles.imo}></Image>
          </View>
          <View>
            <Text style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              justifyContent: 'center'
            }}>Calculator</Text>
          </View>
        </View>
        <View style={styles.Header2}>
          <View style={styles.Header22}>

            <TouchableOpacity style={styles.Minimize}>

            </TouchableOpacity>

          </View>
          <View style={styles.Header22}>
            <TouchableOpacity>
              <View>
                <Image source={Cross} style={{
                  height: '90%',
                  width: '45%',
                  marginLeft: '60%'
                }}></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.Header1}>
        <View style={styles.Header23}>
          <View style={styles.Header24}>
            <TouchableOpacity>
              <Image source={Manu} style={{
                height: '90%',
                width: '50%',
                marginLeft: '15%'
              }}></Image>
            </TouchableOpacity>
          </View>
          <View style={{
            height: '85%',
            width: '90%',
            margin: '1%',
            justifyContent:'center'
          }}>
            <Text style={{
              color:'white',
              fontSize:18
            }}>S-Calculator</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: '14%',
    width: '95%',
    
    backgroundColor: '#000',
    borderRadius: 15,
    justifyContent: 'center'
  },
  Header1: {
    height: '40%',
    width: '98%',
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '1%',
    padding: '1%',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 1,
    shadowColor: 'black',
    elevation: 0
  },
  Header2: {
    height: '95%',
    width: '45%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 1,
    shadowColor: 'black',
    elevation: 0
  },
  imo: {
    height: '100%',
    width: '100%',
    margin: '2%'
  },
  Header22: {
    height: '92%',
    width: '45%',
    backgroundColor: 'black',
    margin: '2%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 1,
    shadowColor: 'black',
    elevation: 0
  },
  Minimize: {
    height: '20%',
    width: '55%',
    marginLeft: '50%',
    backgroundColor: 'white',
    borderRadius: 5
  },
  Header23: {
    height: '96%',
    width: '96%',
    backgroundColor: 'black',
    flexDirection: 'row',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowRadius: 10,
    elevation: 0
  },
  Header24: {
    height: '88%',
    width: '12%',
    marginLeft:'9%',
    borderRadius: 10,
    backgroundColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 0
  }
});

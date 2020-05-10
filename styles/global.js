import { StyleSheet } from 'react-native';

const colorWhite = '#FAFAFA', 
      colorGrey = '#373737',
      colorRed = '#F22613',
      colorCircleTwo = '#F26716',
      colorCircleThree = '#F2B705',
      colorCircleFour = '#F2E205';


export const globalStyles = StyleSheet.create({
    body: {
      backgroundColor: colorWhite,
      resizeMode: "cover",
      flex: 1,
    },
    topBody: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomBody: {
      flex: 1,
      marginHorizontal: 30,
      marginBottom: 40,
      justifyContent: 'flex-end'
    },
    imageBack: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    container: {
      marginHorizontal: 40,
    },
    textTitle: {
      width: '50%',
      fontSize: 40,
      textAlign: 'center',
      color: colorWhite,
      fontFamily: 'Montserrat-ExtraBoldItalic',
    },
    textSubTitle: {
      fontSize: 30,
      textAlign: 'center',
      color: colorWhite,
      fontFamily: 'Montserrat-Bold',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      color: colorGrey,
      fontFamily: 'Montserrat-Bold',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    circleTop: {
      width: '100%',
      height: 200,
      borderRadius: 1000,
      backgroundColor: colorRed,
      transform: [
        { scaleX: 2 }
      ]
    },
    borderBottom: {
      alignContent: 'center',
      justifyContent: 'center' , 
      borderBottomColor: 'white',
      borderBottomWidth: 2,
      width: '50%',
      marginVertical: 10 
    },
    btnText: {
      marginLeft: 10,
      color: '#373737',
      fontFamily: 'Montserrat-Bold',
      fontSize: 20
    },
    icon: {
      position: 'absolute',
      right: 0,
      bottom: 10,
      marginRight: 15
    }
}); 

export const randomeStyles = StyleSheet.create({
  body: {
    backgroundColor: colorWhite,
    resizeMode: "cover",
    justifyContent: 'center',
    flex: 1,
  },
  textNumber: {
    fontSize: 40,
    textAlign: 'center',
    color: colorRed,
    fontFamily: 'Montserrat-Bold',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    marginBottom: 20
  },
  textInput: {
    width: '45%',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colorRed
  }
})
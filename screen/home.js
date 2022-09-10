import * as React from "react";
import { ImageBackground, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { globalStyles } from "../styles/global";
import ButtonHome from "../shared/buttonHome";

function Home({ navigation }) {
  return (
    <ImageBackground source={require("../assets/img/backHome.png")} style={globalStyles.body}>
      <View style={globalStyles.topBody}>
        <Text style={globalStyles.textTitle}>
          Bow
        </Text>
        <View style={globalStyles.borderBottom} />
        <Text style={globalStyles.textSubTitle}>
          Your new application multifunction
        </Text>
      </View>
      <View style={globalStyles.bottomBody}>
        <View style={globalStyles.row}>
          <ButtonHome onPress={() => navigation.navigate("RandomScreen")}>
            <Text style={globalStyles.btnText}>Random Number</Text>
            <Icon name="random" color="#F22613" size={35} style={globalStyles.icon} />
          </ButtonHome>
          <ButtonHome onPress={() => navigation.navigate("CalculatorScreen")}>
            <Text style={globalStyles.btnText}>Calculator</Text>
            <Icon name="calculator" color="#F2B705" size={35} style={globalStyles.icon} />
          </ButtonHome>
        </View>
        <View style={globalStyles.row}>
          <ButtonHome onPress={() => navigation.navigate("CardScreen")}>
            <Text style={globalStyles.btnText}>Card</Text>
            <Icon name="credit-card" color="#F2E205" size={35} style={globalStyles.icon} />
          </ButtonHome>
          <ButtonHome onPress={() => navigation.navigate("ConverterScreen")}>
            <Text style={globalStyles.btnText}>Convertor</Text>
            <Icon name="coins" color="#F26716" size={35} style={globalStyles.icon} />
          </ButtonHome>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

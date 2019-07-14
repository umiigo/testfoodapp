import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { Icon } from "expo";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import { Animated, Easing } from "react-native";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

export default class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1)
  };
  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.scale, {
        toValue: 0.9
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.scale, {
        toValue: 1
      }).start();
    }
  };
  render() {
    return (
      <Container>
        <Menu />
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity>
                <Avatar source={require("../assets/avatar.jpg")} />
              </TouchableOpacity>
              <Title>Welcome to,</Title>
              <Name>APNA PIZZA</Name>
              <Icon.Ionicons
                name="md-basket"
                size={32}
                color="#4775f2"
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>
            <Subtitle>THE MENU</Subtitle>
          </ScrollView>
        </SafeAreaView>
        <Card
          title=""
          image={require("../assets/background2.jpg")}
          caption="SMALL PIZZA"
          logo={require("../assets/logo-react.png")}
          subtitle="£3.99"
        />
        <Card
          title=""
          image={require("../assets/background2.jpg")}
          caption="MEDIUM PIZZA"
          logo={require("../assets/logo-react.png")}
          subtitle="£4.99"
        />
        <Card
          title=""
          image={require("../assets/background2.jpg")}
          caption="LARGE PIZZA"
          logo={require("../assets/logo-react.png")}
          subtitle="£5.99"
        />
      </Container>
    );
  }
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

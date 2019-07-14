import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { connect } from "react-redux";

const screenHeight = Dimensions.get("window").height;

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      })
  };
}

class Menu extends React.Component {
  state = {
    top: new Animated.Value(900)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.isMenuOpen) {
      // Close
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    } else {
      // Open
      Animated.spring(this.state.top, {
        toValue: 54
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Meng To</Title>
          <Subtitle>meng@designcode.io</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1
          }}
        >
          <CloseView>
            <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>

        <Content />
      </AnimatedContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Cover = styled.View`
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.Text`
  font-size: 13;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

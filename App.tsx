import * as React from 'react';
import { 
  Button,
  Text,
} from 'react-native';

import styled from 'styled-components/native';

import Setting from './components/Setting';
import Timer from './components/Timer';

interface AppState {
  settingTime?: number;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      settingTime: undefined,
    };
  }

  render() {
    const {
      settingTime,
    } = this.state;

    return (
      <Container>
        <Header>
          <Setting time={this.state.settingTime} />
        </Header>

        <Content>
          {settingTime &&
            <Timer settingTime={settingTime} />
          }
        </Content>

        <Settings>
          <Button
            title="５分"
            onPress={() => this.timerSetting(5 * 60)}
          >
            ５分
          </Button>

          <Button
            title="２５分"
            onPress={() => this.timerSetting(25 * 60)}
          >
            ２５分
          </Button>

          <Button
            title="３０分"
            onPress={() => this.timerSetting(30 * 60)}
          >
            ３０分
          </Button>
        </Settings>
      </Container>
    );
  }

  private timerSetting = (time: number) => {
    this.setState({
      settingTime: time,
    });
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 50px;
`;

const Header = styled.View`
  flex: 1;
`;

const Content = styled.View`
  flex: 4;
  justify-content: center;
`;

const Settings = styled.View`
  flex: 0.5;
  flex-direction: row;
`;

export default App;

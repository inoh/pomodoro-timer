import * as React from 'react';
import { 
  Button,
  Text,
} from 'react-native';

import styled from 'styled-components/native';

import Setting from './components/Setting';
import SettingButton from './components/SettingButton';
import Timer from './components/Timer';

import {
  timeLabel,
} from './components/formattedTime';

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
            <Timer
              settingTime={settingTime}
            />
          }
        </Content>

        <Settings>
          {[5, 25, 30].map((minite) => (
            <SettingButton
              key={minite}
              time={minite * 60}
              onPress={() => this.timerSetting(minite * 60)}
            />
          ))}
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

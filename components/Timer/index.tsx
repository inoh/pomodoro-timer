import React from 'react';

import {
  Text,
} from 'react-native';

import formattedTime from '../formattedTime';

import styled from 'styled-components/native';

interface TimerProps {
  settingTime: number;
}

interface TimerState {
  startedTime: number;
  diffTime: number;
}

class Timer extends React.Component<TimerProps,  TimerState> {
  constructor(props: TimerProps) {
    super(props);

    this.state = {
      startedTime: Date.now(),
      diffTime: 0,
    };
  }

  public componentDidMount() {
    requestAnimationFrame(this.refreshTime);
  }

  public componentDidUpdate(prevProps: TimerProps) {
    if (this.props.settingTime !== prevProps.settingTime) {
      this.setState({
        startedTime: Date.now(),
      });
    }
  }

  public render() {
    return (
      <StyledText key={this.props.settingTime}>
        {formattedTime(this.state.diffTime)}
      </StyledText>
    );
  }

  private refreshTime = (timestamp: number) => {
    this.setState({
      diffTime: this.props.settingTime - Math.floor((Date.now() - this.state.startedTime) / 1000),
    });

    requestAnimationFrame(this.refreshTime);
  }
}

const StyledText = styled.Text`
  font-size: 100px;
`;

export default Timer;

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
  elapsedTime: number;
}

class Timer extends React.Component<TimerProps, TimerState> {
  private startTime: number = Date.now();

  constructor(props: TimerProps) {
    super(props);

    this.state = {
      elapsedTime: 0,
    };
  }

  public componentDidMount() {
    requestAnimationFrame(this.refreshTime);
  }

  public render() {
    const diffTime = this.props.settingTime - Math.floor(this.state.elapsedTime / 1000);

    return <StyledText key={this.props.settingTime}>{formattedTime(diffTime)}</StyledText>;
  }

  private refreshTime = () => {
    this.setState({
      elapsedTime: Date.now() - this.startTime,
    });

    requestAnimationFrame(this.refreshTime);
  }
}

const StyledText = styled.Text`
  font-size: 100px;
`;

export default Timer;

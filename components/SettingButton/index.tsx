import React from 'react';
import {
  Button,
} from 'react-native';

import {
  timeLabel,
} from '../formattedTime';

interface SettingButtonProps {
  time: number;
  onPress: () => void;
}

const SettingButton: React.SFC<SettingButtonProps> = ({
  time,
  ...props
}) => (
  <Button
    title={timeLabel(time)}
    {...props}
  >
    {timeLabel(5 * 60)}
  </Button>
);

export default SettingButton;

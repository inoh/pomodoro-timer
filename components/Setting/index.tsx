import React from 'react';

import {
  Text,
} from 'react-native';

import {
  timeLabel,
} from '../formattedTime';

interface SettingProps {
  time?: number;
}

const Setting: React.SFC<SettingProps> = ({ time }) => (
  <Text>設定時間：{time ? timeLabel(time) : '見設定'}</Text>
);

export default Setting;

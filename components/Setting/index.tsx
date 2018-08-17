import React from 'react';

import {
  Text,
} from 'react-native';

import formattedTime from '../formattedTime';

interface SettingProps {
  time?: number;
}

const Setting: React.SFC<SettingProps> = ({ time }) => (
  <Text>設定時間：{time ? formattedTime(time) : '見設定'}</Text>
);

export default Setting;

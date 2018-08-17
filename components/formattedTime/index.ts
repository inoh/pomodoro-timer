const getSeconds = (time: number) => Math.floor(time / 60);

const getMinitues = (time: number) => time % 60;

const timeLabel = (time: number) => {
  const seconds = getSeconds(time);
  const minitues = getMinitues(time);

  if (seconds) {
    return minitues ? (
      `${seconds}分 ${minitues}秒`
    ) : (
      `${seconds}分`
    );
  }

  return `${minitues}秒`
}

const formattedTime = (time: number) => {
  const seconds = getSeconds(time);
  const minitues = getMinitues(time);

  if (!seconds) return minitues;

  return `${seconds}:${`0${minitues}`.slice(-2)}`;
}

export {
  formattedTime as default,
  timeLabel,
};

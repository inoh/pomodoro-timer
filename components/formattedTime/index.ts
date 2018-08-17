const formattedTime = (time: number) => {
  if (time < 0) return 0;

  const seconds = Math.floor(time / 60);
  const minitues = time % 60;

  if (!seconds) return minitues;

  return `${seconds}:${`0${minitues}`.slice(-2)}`;
}

export default formattedTime;

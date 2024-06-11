import microphoneIcon from '../../../assets/icon/microphone.svg';
import checkIcon from '../../../assets/icon/check.svg';
import speakerIcon from '../../../assets/icon/speaker.svg';
import logoutIcon from '../../../assets/icon/logout_Icon.svg';
import backIcon from '../../../assets/icon/back.svg';
import nextIcon from '../../../assets/icon/next.svg';
import xmarkIcon from '../../../assets/icon/xmark.svg';
import translateIcon from '../../../assets/icon/translate.svg';
import chatIcon from '../../../assets/icon/chat.svg';
import addIcon from '../add.svg';

interface Icon {
  src: string;
  alt: string;
}
type Icons =
  | 'microphone'
  | 'check'
  | 'speaker'
  | 'logout'
  | 'back'
  | 'next'
  | 'xmark'
  | 'translate'
  | 'add'
  | 'chat';

const icons: Record<Icons, Icon> = {
  microphone: {
    src: microphoneIcon,
    alt: 'Microphone Icon',
  },
  check: {
    src: checkIcon,
    alt: 'Check Icon',
  },
  speaker: {
    src: speakerIcon,
    alt: 'Speaker Icon',
  },
  logout: {
    src: logoutIcon,
    alt: 'Logout Icon',
  },
  back: {
    src: backIcon,
    alt: 'Back Icon',
  },
  next: {
    src: nextIcon,
    alt: 'Next Icon',
  },
  xmark: {
    src: xmarkIcon,
    alt: 'Xmark Icon',
  },
  translate: {
    src: translateIcon,
    alt: 'Translate Icon',
  },
  add: {
    src: addIcon,
    alt: 'Add Icon',
  },
  chat: {
    src: chatIcon,
    alt: 'chat Icon',
  },
};

interface ManagedIconProps {
  name: Icons;
  width?: string;
  height?: string;
}

const ManagedIcon: React.FC<ManagedIconProps> = ({ name, width = '24px', height = 'auto' }) => {
  const icon = icons[name];
  if (!icon) {
    console.error(`Icon ${name} not found.`);
    return null;
  }
  return <img src={icons[name].src} alt={icon.alt} style={{ width, height }} />;
};

export default ManagedIcon;

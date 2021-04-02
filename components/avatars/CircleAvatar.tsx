import PropTypes from 'prop-types';
import { User } from 'react-feather';

import getMediaSource from '@/utils/get-media-source';

CircleAvatar.propTypes = {
  avatar: PropTypes.object,
  size: PropTypes.string
};

CircleAvatar.defaultProps = {
  avatar: null,
  size: '32'
};

let styles = {
  tailwind: {
    frame: `
      border-4
      border-accent
      min-w-min
      p-2
      rounded-full
      shadow
    `,
    container: `
      overflow-hidden
      rounded-full
    `,
    generic: {
      image: `
        max-h-full
        max-w-full
      `,
      noAvatar: `
        bg-soft
        flex
        flex-nowrap
        flex-row
        items-center
        justify-center
        text-accent
      `
    },
  }
};

export default function CircleAvatar({ avatar, size }) {
  const getContainerStyle = () => {
    return `
      ${styles.tailwind.container} h-${size} w-${size}
    `;
  };

  const getNoAvatarStyle = () => {
    return `
      ${styles.tailwind.generic.noAvatar} h-${size} w-${size}
    `;
  };

  return (
    <div className={styles.tailwind.frame}>
      <div className={getContainerStyle()}>
        {
          avatar && avatar.url
            ?
            <img
              src={getMediaSource(avatar)}
              alt="Foto de usuario"
              className={styles.tailwind.generic.image}
            />
            :
            <div className={getNoAvatarStyle()}>
              <User size={size} />
            </div>
        }
      </div>
    </div>
  );
};

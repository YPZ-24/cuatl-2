import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import getMediaSource from '@/utils/get-media-source';

Carousel.propTypes = {
  media: PropTypes.array
};

Carousel.defaultProps = {
  media: []
};

const classes = {
  container: `
    md:w-full
    h-full
    md:flex
    md:flex-row
    md:flex-nowrap
    md:justify-center
    md:items-center
    relative
  `,

  controls: {
    container: `
      absolute
      bg-bse
      bg-opacity-75
      bottom-0
      flex
      flex-nowrap
      flex-row
      right-0
    `,
    button: `
      flex
      flex-row
      h-9
      items-center
      justify-center
      md:text-accent
      md:hover:text-primary
      w-9
    `
  },

  image: `
    animate-fadeIn
    min-h-full
    min-w-full
    object-cover
  `,

  video: `
    animate-fadeIn
    min-h-full
    min-w-full
  `
};

export default function Carousel({ media }) {
  const [file, setFile] = useState(media[0]);
  const mediaElement = useRef(null);

  const showPrevious = (event: any) => {
    event.preventDefault();

    const fileIndex = media.indexOf(file)
      ? media.indexOf(file) - 1
      : media.length - 1;

    return setFile(media[fileIndex]);
  };

  const showNext = (event: any) => {
    event.preventDefault();

    const fileIndex = media.indexOf(file) < (media.length - 1)
      ? media.indexOf(file) + 1
      : 0;

    return setFile(media[fileIndex]);
  };

  return (
    <div className={classes.container}>
      {
        file && (
          file.mime.includes('image') ?
            <img
              ref={mediaElement}
              key={file.id}
              src={getMediaSource(file)}
              alt={file.alternativeText}
              className={classes.image}
            />
            :
            <video
              ref={mediaElement}
              key={file.id}
              autoPlay
              muted
              loop
              className={classes.video}
            >
              <source src={getMediaSource(file)} type={file.mime}></source>
            </video>
        )
      }

      <div className={classes.controls.container}>
        <a onClick={(e) => showPrevious(e)} className={classes.controls.button}>
          <ChevronLeft />
        </a>

        <a onClick={(e) => showNext(e)} className={classes.controls.button}>
          <ChevronRight />
        </a>
      </div>
    </div>
  );
};

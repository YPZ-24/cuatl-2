import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';

Navigationbar.propTypes = {
  referer: PropTypes.string
};

Navigationbar.defaultProps = {
  referer: ''
};

const styles = {
  tailwind: {
    pageContainer: `
      bg-bse
      flex
      flex-nowrap
      flex-row
      h-16
      items-center
      justify-between
      px-6
      relative
      shadow
      z-50
    `,

    control: `
      flex
      flex-nowrap
      flex-row
      h-full
      items-center
      justify-center
      w-16
    `,
  }
};

export default function Navigationbar({ children = null, referer }) {
  const [backButton, setBackButton] = useState(null);

  useEffect(() => {
    //: Link perform some asynchronous tasks that triggers a warning if the
    //: component is unmounted before it was mounted (like in the case of hidding
    //: it as a result of a responsive behaviour). By using a state, we prevent
    //: this warning and just mount the back button if the component is mounted
    setBackButton(
      <Link href={referer}>
        <a className={styles.tailwind.control}>
          <ArrowLeft />
        </a>
      </Link>
    );
  }, []);

  return (
    <div className={styles.tailwind.pageContainer}>
      {backButton}

      {
        children &&
        <div className={styles.tailwind.control}>
          {children}
        </div>
      }
    </div>
  );
};

import PropTypes from 'prop-types';
import { useState } from 'react';
import { ChevronRight } from 'react-feather';

import CategoriesMenu from './CategoriesMenu';
import IDepartment from '@/models/IDepartment';
import isTouchEnabled from '@/utils/detect-touch-device';

DepartmentsMenu.propTypes = {
  departments: PropTypes.arrayOf(PropTypes.object)
};

DepartmentsMenu.defaultProps = {
  departments: []
};

const classes = {
  container: `
    animate-expandVertically
    bg-bse
    flex
    flex-nowrap
    flex-row
    w-full
  `,

  departmentsMenu: {
    container: `
      bg-accent
      font-bold
      py-4
      md:py-7
      text-bse
      md:w-1/4
      w-1/3
    `,
    item: `
      active:bg-bse
      active:text-primary
      cursor-pointer
      flex
      flex-nowrap
      flex-row
      hover:bg-bse
      hover:text-primary
      items-center
      justify-between
      p-3
    `
  },

  categoriesMenu: {
    container: `
      flex-1
      md:px-12
      md:py-9
      p-6
    `,
    title: `
      border-b-2
      border-secondary
      font-display
      mb-6
      md:mb-9
      pb-3
      text-2xl
      text-accent
    `
  }
};

export default function DepartmentsMenu({ departments }) {
  const [department, setDepartment] = useState<IDepartment>(departments[0]);

  const showCategories = (event: any, item: IDepartment): void => {
    event.preventDefault();
    setDepartment(item);
  };

  return (
    <div className={classes.container}>
      <ul className={classes.departmentsMenu.container}>
        {
          departments.map((item: IDepartment) => {
            return isTouchEnabled()
              ? //: on touch devices clicking on this item will show categories
              <a key={item.slug} onClick={(evt) => showCategories(evt, item)}>
                <li className={classes.departmentsMenu.item}>
                  <span>{item.name}</span>
                  <ChevronRight size="18" />
                </li>
              </a>
              : //: on non-touch devices clicking on this item will redirect
              <a
                key={item.slug}
                href={`/store/products?department=${item.slug}`}
              >
                <li
                  onMouseEnter={() => setDepartment(item)}
                  className={classes.departmentsMenu.item}
                >
                  <span>{item.name}</span>
                  <ChevronRight size="18" />
                </li>
              </a>
          })
        }
      </ul>

      <div className={classes.categoriesMenu.container}>
        <a href={`/store/products?department=${department.slug}`}>
          <h2 className={classes.categoriesMenu.title}>
            {department.name}
          </h2>
        </a>

        {
          department &&
          <CategoriesMenu department={department} />
        }
      </div>
    </div>
  );
};

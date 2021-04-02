import PropTypes from 'prop-types';

import ICategory from '@/models/ICategory';
import ISubcategory from '@/models/ISubcategory';

CategoriesMenu.propTypes = {
  department: PropTypes.object,
};

CategoriesMenu.defaultProps = {
  department: null,
};

const classes = {
  container: `
    gap-6
    grid
    md:grid-cols-3
  `,

  item: `
    cursor-pointer
    font-bold
    text-secondary
    uppercase
  `,

  subcategories: {
    container: `
      ml-4
    `,
    item: `
      cursor-pointer
      hover:text-accent
      my-1
    `
  }
};

export default function CategoriesMenu({ department }) {
  return (
    <div className={classes.container}>
      {
        department.categories.map((category: ICategory) => (
          <ul key={category.slug}>
            <a href={`/store/products?department=${department.slug}&category=${category.slug}`}>
              <li className={classes.item}>{category.name}</li>
            </a>

            <ul className={classes.subcategories.container}>
              {
                category.subcategories.map((subcategory: ISubcategory) => (
                  <a
                    key={subcategory.slug}
                    href={`/store/products?department=${department.slug}&category=${category.slug}&subcategory=${subcategory.slug}`}
                  >
                    <li className={classes.subcategories.item}>
                      {subcategory.name}
                    </li>
                  </a>
                ))
              }
            </ul>
          </ul>
        ))
      }
    </div>
  );
};

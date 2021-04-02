import { ShoppingBag } from 'react-feather';

const BagButton = () => {
  return (
    <a
      href="/order"
      className="md:flex md:flex-row md:flex-nowrap md:justify-center md:items-center md:px-9 hover:text-accent">
      <ShoppingBag size={27} />
    </a>
  );
};

export default BagButton;

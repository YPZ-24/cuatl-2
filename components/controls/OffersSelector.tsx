import PropTypes from 'prop-types';
import { useState } from 'react';

import Dropdown from '@/components/dropdowns/Dropdown';
import IOffer from '@/models/IOffer';

OffersSelector.propTypes = {
  offers: PropTypes.array,
  state: PropTypes.array
};

OffersSelector.defaultProps = {
  offers: [],
  state: []
};

export default function OffersSelector(
  { offers, state }: { offers: Array<IOffer>, state: any }
) {
  const [selectedOffers, setSelectedOffers] = state;
  const [visible, setVisible] = useState<boolean>(false);

  const applyOffer = (event: any, offerId: string) => {
    event.currentTarget.classList.toggle('bg-accent');
    event.currentTarget.classList.toggle('bg-inactive');
    event.currentTarget.classList.toggle('shadow');
    event.currentTarget.classList.toggle('shadow-inner');
    event.currentTarget.classList.toggle('text-bse');
    event.currentTarget.classList.toggle('text-primary');

    const applied = selectedOffers.filter((selectedOffer) => selectedOffer === offerId);

    if (applied.length === 0) {
      return setSelectedOffers(selectedOffers.concat([offerId]));
    } else {
      return setSelectedOffers(
        selectedOffers.filter((selectedOffer) => selectedOffer !== offerId)
      );
    }
  };

  return (
    <div>
      {
        offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-row flex-wrap justify-between items-center mb-4"
          >
            <button
              onClick={(event) => applyOffer(event, offer.id)}
              className="flex flex-row flex-wrap justify-center px-4 py-2 rounded-md shadow bg-accent text-bse font-bold border-accent hover:bg-inactive hover:text-primary transition-all w-1/4"
            >
              {selectedOffers.filter((selectedOffer: IOffer) => selectedOffer === offer.id).length === 0
                ? <>
                  <span>¡La quiero!</span>
                </>
                : <span>¡Ya la tienes!</span>
              }
            </button>

            <p>{offer.name}</p>

            <div className="flex flex-row items-center text-accent cursor-pointer hover:text-primary">
              <Dropdown onClick={() => setVisible(!visible)} label="Detalles" />
            </div>

            {visible &&
              <div
                className="w-full px-4 py-4 mt-1 rounded-md shadow bg-soft animate-expandBottom"
              >
                {offer.description}
              </div>
            }
          </div>
        ))
      }
    </div >
  );
};

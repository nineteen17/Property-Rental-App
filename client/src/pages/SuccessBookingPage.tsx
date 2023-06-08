
import SuccessBooking from '../components/routed/success/SuccessBooking';
import { useParams } from 'react-router-dom';
import { usePropertyId } from '../hooks/useListings';
import './SuccessBookingPage.scss'

const SuccessBookingPage = () => {
    const { id } = useParams();
    const { data: property } = usePropertyId(id);
    return (
      <div className="successBookingPage">
        <div className="successBookingPage__container">
          <SuccessBooking listing={property} />
        </div>
      </div>
    );
}

export default SuccessBookingPage
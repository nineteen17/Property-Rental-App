
import { useNavigate, useParams } from "react-router-dom";
import SuccessApply from "../components/routed/success/SuccessApply";
import { usePropertyId } from "../hooks/useListings";
import './SuccessApplyPage.scss'

const SuccessApplyPage = () => {
  const { id } = useParams();
  const { data: property, isLoading, error } = usePropertyId(id);
  return (
    <div className="successApplyPage">
      <div className="successApplyPage__container">
        <SuccessApply listing={property} />
      </div>
    </div>
  );
};

export default SuccessApplyPage;

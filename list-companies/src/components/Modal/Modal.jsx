import { useDispatch, useSelector } from "react-redux";
import {
  modalAddCompanyActive,
  modalAddEmployeeActive,
  modalChangeFieldActive,
} from "../../toolkitRedux/toolkitReducer";
import "./Modal.scss";

const Modal = ({ children }) => {
  const modalAddEmployee = useSelector(
    (state) => state.toolkit.modalAddEmployee
  );
  const modalAddCompany = useSelector((state) => state.toolkit.modalAddCompany);
  const modalChangeField = useSelector(
    (state) => state.toolkit.modalChangeField
  );
  const dispatch = useDispatch();
  return (
    <div
      className="modalContainer"
      onClick={() => {
        modalAddCompany && dispatch(modalAddCompanyActive());
        modalAddEmployee && dispatch(modalAddEmployeeActive());
        modalChangeField && dispatch(modalChangeFieldActive());
      }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

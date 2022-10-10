import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  addCompany,
  modalAddCompanyActive,
} from "../../toolkitRedux/toolkitReducer";

const AddCompany = () => {
  const dispatch = useDispatch();
  const inputTitleRef = useRef(null);
  const inputAdressRef = useRef(null);

  return (
    <div className="modalBox">
      <div>
        <p>Введите название компании</p>
        <input ref={inputTitleRef} />
      </div>
      <div>
        <p>Введите адрес компании</p>
        <input ref={inputAdressRef} />
      </div>
      <div className="buttonsContainer">
        <button
          onClick={() =>
            dispatch(
              addCompany({
                title: inputTitleRef.current.value,
                adress: inputAdressRef.current.value,
              })
            )
          }
        >
          Применить
        </button>
        <button onClick={() => dispatch(modalAddCompanyActive())}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default AddCompany;

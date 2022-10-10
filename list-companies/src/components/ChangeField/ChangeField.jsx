import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modalChangeField,
  modalChangeFieldActive,
} from "../../toolkitRedux/toolkitReducer";

const ChangeField = () => {
  const field = useSelector((state) => state.toolkit.modalChangeField);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  return (
    <div className="modalBox">
      <p>
        <span>Изменить: </span>
        {field.description}
      </p>
      <div>
        <p>{field.title}</p>
        <input ref={inputRef} />
      </div>
      <div className="buttonsContainer">
        <button
          onClick={() => dispatch(modalChangeField(inputRef.current.value))}
        >
          Применить
        </button>
        <button onClick={() => dispatch(modalChangeFieldActive())}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default ChangeField;

import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  addEmployee,
  modalAddEmployeeActive,
} from "../../toolkitRedux/toolkitReducer";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const inputLastNameRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputJobRef = useRef(null);

  return (
    <div className="modalBox">
      <div>
        <p>Введите фамилию</p>
        <input ref={inputLastNameRef} />
      </div>
      <div>
        <p>Введите имя</p>
        <input ref={inputNameRef} />
      </div>
      <div>
        <p>Введите должность</p>
        <input ref={inputJobRef} />
      </div>
      <div className="buttonsContainer">
        <button
          onClick={() =>
            dispatch(
              addEmployee({
                lastName: inputLastNameRef.current.value,
                name: inputNameRef.current.value,
                job: inputJobRef.current.value,
              })
            )
          }
        >
          Применить
        </button>
        <button onClick={() => dispatch(modalAddEmployeeActive())}>
          Отменить
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;

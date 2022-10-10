import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActiveCompany,
  changeActiveCompanyAll,
  checkedCompany,
  deleteCompany,
  modalAddCompanyActive,
  modalChangeFieldActive,
} from "../../toolkitRedux/toolkitReducer";

const TableCompany = () => {
  const listRedux = useSelector((state) => state.toolkit.list);
  const checkedCompanyRedux = useSelector(
    (state) => state.toolkit.checkedCompany
  );
  const dispatch = useDispatch();

  const [viewList, setViewList] = useState([]);
  const [fathing, setFathing] = useState(false);
  const [start, setStart] = useState(false);
  const [secondNumberScroll, setSecondNumberScroll] = useState(8);
  const blockRef = useRef(null)

  useEffect(() => {
    const value = listRedux.length;
    if (value > 0 && value < 9) {
      setViewList(listRedux);
    }else {
      setViewList(listRedux.slice(0, secondNumberScroll))
    }
    setStart(true)
  }, []);

  useEffect(() => {
    blockRef.current.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  },[]);

  useEffect(() => {
    if (fathing) {
      setViewList(listRedux.slice(0, secondNumberScroll+8))
      setSecondNumberScroll(secondNumberScroll+8)
    }
    setFathing(false)
    
  }, [fathing]);

  useEffect(() => {
    if (start) {
      setViewList(listRedux.slice(0, secondNumberScroll))
    }
    
    
  }, [listRedux]);


  const scrollHandler = (e) => {
    if (blockRef.current.scrollTop + blockRef.current.offsetHeight + 1 >= blockRef.current.scrollHeight) {
      setFathing(true)
    }
  };

  return (
    <div>
      <h3>Компании</h3>
      <div className="tableContainer" ref={blockRef}>
        <table>
          <thead>
            <tr>
              <th>
                <div className="tableHeaderCheckbox">
                  Выделить всё
                  <input
                    type="checkbox"
                    onClick={() => {
                      dispatch(changeActiveCompanyAll());
                      dispatch(checkedCompany());
                    }}
                    checked={checkedCompanyRedux}
                    readOnly
                  />
                </div>
              </th>
              <th>Название компании</th>
              <th>Количество сотрудников</th>
              <th>Адрес</th>
            </tr>
          </thead>
          <tbody>
            {viewList.map((company) => (
              <tr key={company.id} className={company.active ? "trActive" : ""}>
                <td>
                  <input
                    type="checkbox"
                    onClick={() => {
                      dispatch(changeActiveCompany(company.id));
                    }}
                    checked={company.active}
                    readOnly
                  />
                </td>
                <td>
                  <span>{company.title}</span>
                  <div
                    className="modalChange"
                    onClick={() =>
                      dispatch(
                        modalChangeFieldActive({
                          title: company.title,
                          description: "Название компании",
                          companyId: company.id,
                          field: "title",
                        })
                      )
                    }
                  >
                    ...
                  </div>
                </td>
                <td>
                  <span>{company.numberEmployees}</span>
                </td>
                <td>
                  <span>{company.adress}</span>
                  <div
                    className="modalChange"
                    onClick={() =>
                      dispatch(
                        modalChangeFieldActive({
                          title: company.adress,
                          description: "Адрес",
                          companyId: company.id,
                          field: "adress",
                        })
                      )
                    }
                  >
                    ...
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="buttonsTable">
          <button onClick={() => dispatch(modalAddCompanyActive())}>
            Добавить
          </button>
          {viewList.find((el) => el.active) && (
            <button onClick={() => dispatch(deleteCompany())}>Удалить</button>
          )}
        </div> */}
      </div>
      <div className="buttonsTable">
          <button onClick={() => dispatch(modalAddCompanyActive())}>
            Добавить
          </button>
          {viewList.find((el) => el.active) && (
            <button onClick={() => dispatch(deleteCompany())}>Удалить</button>
          )}
        </div>
    </div>
  );
};

export default TableCompany;

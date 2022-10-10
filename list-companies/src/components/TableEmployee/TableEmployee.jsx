import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActiveEmployee,
  changeActiveEmployeeAll,
  checkedEmployee,
  deleteEmployee,
  modalAddEmployeeActive,
  modalChangeFieldActive,
} from "../../toolkitRedux/toolkitReducer";
import "./TableEmployee.scss";

const TableEmployee = () => {
  const listRedux = useSelector((state) => state.toolkit.list);
  const checkedEmployeeRedux = useSelector(
    (state) => state.toolkit.checkedEmployee
  );

  const dispatch = useDispatch();

  return (
    <div className="emloyeeContainer">
      <h3>Сотрудники</h3>
      {listRedux.find((el) => el.active) && (
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="tableHeaderCheckbox">
                    Выделить всё
                    <input
                      type="checkbox"
                      onClick={() => {
                        dispatch(changeActiveEmployeeAll());
                        dispatch(checkedEmployee());
                      }}
                      checked={checkedEmployeeRedux}
                      readOnly
                    />
                  </div>
                </th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Должность</th>
              </tr>
            </thead>
            <tbody>
              {listRedux.map((company, indexCompany) => {
                if (company.active && company.employees.length) {
                  return company.employees.map((employee) => (
                    <tr
                      key={employee.id}
                      className={employee.active ? "trActive" : ""}
                    >
                      <td>
                        <input
                          type="checkbox"
                          onClick={() =>
                            dispatch(
                              changeActiveEmployee({
                                indexCompany,
                                employeeId: employee.id,
                              })
                            )
                          }
                          checked={employee.active}
                          readOnly
                        />
                      </td>
                      <td>
                        <span>{employee.lastName}</span>
                        <div
                          className="modalChange"
                          onClick={() =>
                            dispatch(
                              modalChangeFieldActive({
                                title: employee.lastName,
                                description: "Фамилию",
                                companyId: company.id,
                                field: "lastName",
                                employeeId: employee.id,
                              })
                            )
                          }
                        >
                          ...
                        </div>
                      </td>
                      <td>
                        <span>{employee.name}</span>
                        <div
                          className="modalChange"
                          onClick={() =>
                            dispatch(
                              modalChangeFieldActive({
                                title: employee.name,
                                description: "Имя",
                                companyId: company.id,
                                field: "name",
                                employeeId: employee.id,
                              })
                            )
                          }
                        >
                          ...
                        </div>
                      </td>
                      <td>
                        <span>{employee.job}</span>
                        <div
                          className="modalChange"
                          onClick={() =>
                            dispatch(
                              modalChangeFieldActive({
                                title: employee.job,
                                description: "Должность",
                                companyId: company.id,
                                field: "job",
                                employeeId: employee.id,
                              })
                            )
                          }
                        >
                          ...
                        </div>
                      </td>
                    </tr>
                  ));
                }
              })}
            </tbody>
          </table>
        </div>
      )}
      {listRedux.find((el) => el.active) && (
        <div className="buttonsTable">
          {listRedux.filter((companys) => companys.active).length < 2 ? (
            <button onClick={() => dispatch(modalAddEmployeeActive())}>
              Добавить
            </button>
          ) : (
            <span>Чтобы добавить сотрудника выберите одну компанию</span>
          )}
          {listRedux
            .filter((companys) => companys.active)
            .map((el2) => el2.employees.find((el3) => el3.active))
            .find((el) => el !== undefined) && (
            <button onClick={() => dispatch(deleteEmployee())}>Удалить</button>
          )}
        </div>
      )}
    </div>
  );
};

export default TableEmployee;

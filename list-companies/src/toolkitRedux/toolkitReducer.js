import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      title: "mts1",
      numberEmployees: 1,
      adress: "rnd",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 1,
      active: false,
    },{
      title: "mts2",
      numberEmployees: 3,
      adress: "rnd3",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
        {
          lastName: "Иванов2",
          name: "Иван2",
          job: "senior2",
          id: 2,
          active: false,
        },
        {
          lastName: "Иванов3",
          name: "Иван3",
          job: "senior3",
          id: 3,
          active: false,
        },
      ],
      id: 2,
      active: false,
    },{
      title: "mts3",
      numberEmployees: 1,
      adress: "rnd3",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 3,
      active: false,
    },{
      title: "mts4",
      numberEmployees: 1,
      adress: "rnd4",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 4,
      active: false,
    },{
      title: "mts5",
      numberEmployees: 1,
      adress: "rnd5",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 5,
      active: false,
    },{
      title: "mts6",
      numberEmployees: 1,
      adress: "rnd6",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 6,
      active: false,
    },{
      title: "mts7",
      numberEmployees: 1,
      adress: "rnd7",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 7,
      active: false,
    }, {
      title: "mts8",
      numberEmployees: 1,
      adress: "rnd8",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 8,
      active: false,
    },{
      title: "mts9",
      numberEmployees: 1,
      adress: "rnd9",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 9,
      active: false,
    },
    {
      title: "mts10",
      numberEmployees: 1,
      adress: "rnd10",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 10,
      active: false,
    },
    {
      title: "mts11",
      numberEmployees: 1,
      adress: "rnd11",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 11,
      active: false,
    },
    {
      title: "mts12",
      numberEmployees: 1,
      adress: "rnd12",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 12,
      active: false,
    },
    {
      title: "mts13",
      numberEmployees: 1,
      adress: "rnd13",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 13,
      active: false,
    }, {
      title: "mts14",
      numberEmployees: 1,
      adress: "rnd14",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 14,
      active: false,
    }, {
      title: "mts15",
      numberEmployees: 1,
      adress: "rnd15",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 15,
      active: false,
    }, {
      title: "mts16",
      numberEmployees: 1,
      adress: "rnd16",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 16,
      active: false,
    }, {
      title: "mts17",
      numberEmployees: 1,
      adress: "rnd17",
      employees: [
        {
          lastName: "Иванов",
          name: "Иван",
          job: "senior",
          id: 1,
          active: false,
        },
      ],
      id: 17,
      active: false,
    }
  ],
  checkedCompany: false,
  checkedEmployee: false,
  modalAddCompany: false,
  modalAddEmployee: false,
  modalChangeField: null,
};

export const modalAddCompanyActive = createAction("MODAL_ADD_COMPANY_ACTIVE");
export const modalAddEmployeeActive = createAction("MODAL_ADD_EMPLOYEE_ACTIVE");
export const modalChangeFieldActive = createAction("MODAL_CHANGE_FIELD_ACTIVE");
export const modalChangeField = createAction("MODAL_CHANGE_FIELD");

export const changeActiveCompany = createAction("CHANGE_ACTIVE_COMPANY");
export const changeActiveCompanyAll = createAction("CHANGE_ACTIVE_COMPANY_ALL");

export const changeActiveEmployee = createAction("CHANGE_ACTIVE_EMPLOYEE");
export const changeActiveEmployeeAll = createAction(
  "CHANGE_ACTIVE_EMPLOYEE_ALL"
);

export const checkedCompany = createAction("CHECKED_COMPANY");
export const checkedEmployee = createAction("CHECKED_EMPLOYEE");

export const deleteCompany = createAction("DELETE_COMPANY");
export const deleteEmployee = createAction("DELETE_EMPLOYEE");

export const addCompany = createAction("ADD_COMPANY");
export const addEmployee = createAction("ADD_EMPLOYEE");

export default createReducer(initialState, {
  [addCompany]: (state, action) => {
    const newCompany = {
      title: action.payload.title,
      numberEmployees: 0,
      adress: action.payload.adress,
      employees: [],
      id: new Date().getMilliseconds(),
      active: false,
    };

    state.list.push(newCompany);
    state.modalAddCompany = !state.modalAddCompany;
  },

  [addEmployee]: (state, action) => {
    const newEmployee = {
      lastName: action.payload.lastName,
      name: action.payload.name,
      job: action.payload.job,
      id: new Date().getMilliseconds(),
      active: false,
    };

    state.list = state.list.map((company) => {
      if (company.active) {
        company.employees.push(newEmployee);
        company.numberEmployees++;
        return company;
      } else {
        return company;
      }
    });
    state.modalAddEmployee = !state.modalAddEmployee;
  },

  [modalAddCompanyActive]: (state) => {
    state.modalAddCompany = !state.modalAddCompany;
  },

  [modalAddEmployeeActive]: (state) => {
    state.modalAddEmployee = !state.modalAddEmployee;
  },

  [modalChangeFieldActive]: (state, action) => {
    action.payload
      ? (state.modalChangeField = action.payload)
      : (state.modalChangeField = null);
  },

  [modalChangeField]: (state, action) => {

    state.modalChangeField.employeeId
      ? (state.list = state.list.map((company) =>
          company.id === state.modalChangeField.companyId
            ? {
                ...company,
                employees: company.employees.map((employee) =>
                  employee.id === state.modalChangeField.employeeId
                    ? {
                        ...employee,
                        [state.modalChangeField.field]: action.payload,
                      }
                    : employee
                ),
              }
            : company
        ))
      : (state.list = state.list.map((company) =>
          company.id === state.modalChangeField.companyId
            ? { ...company, [state.modalChangeField.field]: action.payload }
            : company
        ));

    state.modalChangeField = null;
  },

  [changeActiveCompany]: (state, action) => {
    state.list = state.list.map((company) =>
      company.id === action.payload
        ? { ...company, active: !company.active }
        : company
    );

    state.checkedCompany = false;
  },

  [changeActiveCompanyAll]: (state) => {
    state.list = state.list.map((company) => ({
      ...company,
      active: state.checkedCompany ? false : true,
    }));
  },

  [checkedCompany]: (state) => {
    state.checkedCompany = !state.checkedCompany;
  },

  [changeActiveEmployee]: (state, action) => {
    const changeActive = state.list[action.payload.indexCompany].employees.map(
      (employee) =>
        employee.id === action.payload.employeeId
          ? { ...employee, active: !employee.active }
          : employee
    );

    state.list = state.list.map((company, index) =>
      index === action.payload.indexCompany
        ? { ...company, employees: changeActive }
        : company
    );

    state.checkedEmployee = false;
  },

  [changeActiveEmployeeAll]: (state) => {
    state.list = state.list.map((company) => {
      if (company.active) {
        return {
          ...company,
          employees: company.employees.map((employee) => ({
            ...employee,
            active: state.checkedEmployee ? false : true,
          })),
        };
      } else {
        return company;
      }
    });
  },

  [checkedEmployee]: (state) => {
    state.checkedEmployee = !state.checkedEmployee;
  },

  [deleteCompany]: (state) => {
    state.list = state.list.filter((company) => !company.active);

    state.checkedCompany = false;
  },

  [deleteEmployee]: (state) => {
    state.list = state.list.map((company) => {

      return company.active
        ? {
            ...company,
            employees: company.employees.filter((e) => !e.active),
          }
        : company;
    });

    state.list = state.list.map((company) =>
      company.active
        ? { ...company, numberEmployees: company.employees.length }
        : company
    );

    state.checkedEmployee = false;
  },
});

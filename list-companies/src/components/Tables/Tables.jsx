import { useSelector } from "react-redux";
import AddCompany from "../AddCompany/AddCompany";
import AddEmployee from "../AddEmploees/AddEmployee";
import ChangeField from "../ChangeField/ChangeField";
import Modal from "../Modal/Modal";
import TableCompany from "../TableCompany/TableCompany";
import TableEmployee from "../TableEmployee/TableEmployee";
import "./Tables.scss";

const Table = () => {
  const modalAddCompany = useSelector((state) => state.toolkit.modalAddCompany);
  const modalAddEmployee = useSelector(
    (state) => state.toolkit.modalAddEmployee
  );
  const field = useSelector((state) => state.toolkit.modalChangeField);

  return (
    <>
      <TableCompany />
      <TableEmployee />
      {modalAddCompany && (
        <Modal>
          <AddCompany />
        </Modal>
      )}
      {modalAddEmployee && (
        <Modal>
          <AddEmployee />
        </Modal>
      )}
      {field && (
        <Modal>
          <ChangeField />
        </Modal>
      )}
    </>
  );
};

export default Table;

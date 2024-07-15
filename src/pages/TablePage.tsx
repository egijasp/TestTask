import "../styles/TablePage.scss";
import { useState } from "react";
import Input from "../components/Input/input";
import Button from "../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addEntry, deleteEntry, editEntry } from "../redux/reducers/TableSlice";
import { RootState } from "../redux/store";
import Pagination from "../components/Pagination/Pagination";
import { v4 as uuidv4 } from "uuid";
import Table from "../components/Table/Table";

const headers = ["ID", "First Name", "Last Name", "Position", "Actions"];

const TablePage = () => {
  const entries = useSelector((state: RootState) => state.table);
  const [editing, setEditing] = useState<{ id: string; field: string } | null>(
    null
  );
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [search, setSearch] = useState<string>("");
  const [editValues, setEditValues] = useState<{ [key: string]: string }>({});
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const filteredEntries = entries.filter(
    (entry) =>
      entry.firstName.toLowerCase().includes(search.toLowerCase()) ||
      entry.lastName.toLowerCase().includes(search.toLowerCase()) ||
      entry.position.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedEntries = filteredEntries.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const startEditing = (id: string, field: string, value: string) => {
    setEditing({ id, field });
    setEditValues({ ...editValues, [field]: value });
  };

  const cancelEdit = () => {
    setEditing(null);
    setEditValues({});
  };

  const handleAdd = () => {
    const id = uuidv4();
    const newEntry = { id, firstName: "", lastName: "", position: "" };
    dispatch(addEntry(newEntry));

    // Calculate the page number where the new entry will be located and set this page
    setPage(Math.ceil((entries.length + 1) / itemsPerPage));
  };

  const saveEdit = (id: string, field: string) => {
    const entry = entries.find((entry) => entry.id === id);
    if (entry) {
      const updatedEntry = { ...entry, [field]: editValues[field] };
      dispatch(editEntry(updatedEntry));
      setEditing(null);
    }
  };

  const handleEditChange = (field: string, value: string) => {
    setEditValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteEntry(id));

    // Calculate the page number after deletion
    const newPage = Math.ceil((entries.length - 1) / itemsPerPage);
    setPage(newPage);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setPage(1);
  };

  return (
    <main className="main">
      <div id="tablePage" className="container">
        <div className="table-page__filter">
          <Input
            type="search"
            placeholder="Search"
            className="table-page__search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            label="Add new"
            icon="add"
            iconClassName="material-symbols-outlined weight-700"
            className="btn btn-primary bold"
            clickHandler={() => handleAdd()}
          ></Button>
        </div>
        <div className="table-page__table">
          <Table
            headers={headers}
            entries={paginatedEntries}
            page={page}
            itemsPerPage={itemsPerPage}
            startEditing={startEditing}
            editing={editing}
            editValues={editValues}
            handleEditChange={handleEditChange}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
            handleDelete={handleDelete}
          />
        </div>
        <Pagination
          currentPage={page}
          totalItems={filteredEntries.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </main>
  );
};

export default TablePage;

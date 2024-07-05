import { useState } from "react";
import Input from "../components/Input/input";
import Button from "../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addEntry, deleteEntry, editEntry } from "../redux/reducers/TableSlice";
import { RootState } from "../redux/store";
import Paginaton from "../components/Paginaton/Paginaton";
import EditableCell from "../components/EditableCell/EditableCell";

const Table = () => {
  const entries = useSelector((state: RootState) => state.table);

  const headers = ["ID", "First Name", "Last Name", "Position", "Actions"];

  const [editing, setEditing] = useState<{ id: number; field: string } | null>(
    null
  );

  const [search, setSearch] = useState<string>("");

  const [editValues, setEditValues] = useState<{ [key: string]: string }>({});

  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

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

  const startEditing = (id: number, field: string, value: string) => {
    setEditing({ id, field });
    setEditValues({ ...editValues, [field]: value });
  };

  const cancelEdit = () => {
    setEditing(null);
    setEditValues({});
  };

  const handleAdd = () => {
    const id = entries.length + 1;
    const newEntry = { id, firstName: "", lastName: "", position: "" };
    dispatch(addEntry(newEntry));
  };

  const saveEdit = (id: number, field: string) => {
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

  const handleDelete = (id: number) => {
    dispatch(deleteEntry(id));
  };

  return (
    <main className="main">
      <div id="tablePage" className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Input
            type="search"
            placeholder="Search"
            className="input-search"
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
        <div className="container_table">
          <table>
            <thead>
              <tr className="table_header">
                {headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedEntries.map(({ id, lastName, position, firstName }) => (
                <tr key={id}>
                  <td className="table-cell_id">{id}</td>
                  <EditableCell
                    field="firstName"
                    id={id}
                    placeholder="Name"
                    editValue={editValues.firstName ?? ""}
                    value={firstName}
                    handleEditChange={handleEditChange}
                    startEditing={startEditing}
                    isEditing={
                      editing?.id === id && editing.field === "firstName"
                    }
                    saveEdit={() => saveEdit(id, "firstName")}
                    cancelEdit={() => cancelEdit()}
                  />
                  <EditableCell
                    field="lastName"
                    id={id}
                    editValue={editValues.lastName ?? ""}
                    placeholder="Surname"
                    value={lastName}
                    handleEditChange={handleEditChange}
                    startEditing={startEditing}
                    isEditing={
                      editing?.id === id && editing.field === "lastName"
                    }
                    saveEdit={() => saveEdit(id, "lastName")}
                    cancelEdit={() => cancelEdit()}
                  />
                  <EditableCell
                    field="position"
                    value={position}
                    placeholder="Position"
                    id={id}
                    editValue={editValues.position ?? ""}
                    handleEditChange={handleEditChange}
                    startEditing={startEditing}
                    isEditing={
                      editing?.id === id && editing.field === "position"
                    }
                    saveEdit={() => saveEdit(id, "position")}
                    cancelEdit={() => cancelEdit()}
                  />
                  <td className="table-cell_actions">
                    <Button
                      className="btn btn-icon"
                      icon="delete"
                      iconClassName="material-symbols-outlined"
                      clickHandler={() => handleDelete(id)}
                    ></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paginaton
          currentPage={page}
          totalItems={filteredEntries.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setPage}
        />
      </div>
    </main>
  );
};

export default Table;

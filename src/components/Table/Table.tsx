import "./Table.scss";
import { FC } from "react";
import Button from "../Button/Button";
import EditableCell from "../EditableCell/EditableCell";

type Entry = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
};

type TableProps = {
  headers: string[];
  entries: Entry[];
  page: number;
  itemsPerPage: number;
  startEditing: (id: string, field: string, value: string) => void;
  editing: { id: string; field: string } | null;
  editValues: { [key: string]: string };
  handleEditChange: (field: string, value: string) => void;
  saveEdit: (id: string, field: string) => void;
  cancelEdit: () => void;
  handleDelete: (id: string) => void;
};

const Table: FC<TableProps> = ({
  headers,
  entries,
  page,
  itemsPerPage,
  startEditing,
  editing,
  editValues,
  handleEditChange,
  saveEdit,
  cancelEdit,
  handleDelete,
}) => (
  <table className="table">
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {entries.map(({ id, lastName, position, firstName }, index) => (
        <tr key={id} className="table__row">
          <td className="table__cell table__cell--id">
            {(page - 1) * itemsPerPage + index + 1}
          </td>
          <EditableCell
            field="firstName"
            id={id}
            placeholder="Name"
            editValue={editValues.firstName ?? ""}
            value={firstName}
            handleEditChange={handleEditChange}
            startEditing={startEditing}
            isEditing={editing?.id === id && editing.field === "firstName"}
            saveEdit={() => saveEdit(id, "firstName")}
            cancelEdit={cancelEdit}
          />
          <EditableCell
            field="lastName"
            id={id}
            editValue={editValues.lastName ?? ""}
            placeholder="Surname"
            value={lastName}
            handleEditChange={handleEditChange}
            startEditing={startEditing}
            isEditing={editing?.id === id && editing.field === "lastName"}
            saveEdit={() => saveEdit(id, "lastName")}
            cancelEdit={cancelEdit}
          />
          <EditableCell
            field="position"
            value={position}
            placeholder="Position"
            id={id}
            editValue={editValues.position ?? ""}
            handleEditChange={handleEditChange}
            startEditing={startEditing}
            isEditing={editing?.id === id && editing.field === "position"}
            saveEdit={() => saveEdit(id, "position")}
            cancelEdit={cancelEdit}
          />
          <td className="table__cell table__cell--actions">
            <Button
              className="btn btn-icon"
              icon="delete"
              iconClassName="material-symbols-outlined"
              clickHandler={() => handleDelete(id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;

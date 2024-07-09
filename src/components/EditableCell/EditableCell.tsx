import "./EditableCell.scss";
import { FC } from "react";

interface EditableCellProps {
  id: string;
  field: string;
  value: string;
  isEditing: boolean;
  editValue: string;
  placeholder: string;
  startEditing: (id: string, field: string, value: string) => void;
  handleEditChange: (field: string, value: string) => void;
  saveEdit: (id: string, field: string) => void;
  cancelEdit: () => void;
}

const EditableCell: FC<EditableCellProps> = ({
  id,
  field,
  value,
  isEditing,
  editValue,
  placeholder,
  startEditing,
  handleEditChange,
  saveEdit,
  cancelEdit,
}) => (
  <td className={`cell-${field}`}>
    <input
      name={field}
      value={isEditing ? editValue : value}
      type="text"
      onChange={(e) => handleEditChange(field, e.target.value)}
      placeholder={`Type ${placeholder}`}
      className="table_input"
      onFocus={() => startEditing(id, field, value)}
      autoComplete="off"
    />
    <div className={`panel ${isEditing ? "" : "hidden"}`}>
      <button
        type="button"
        onClick={() => saveEdit(id, field)}
        className="btn_cell btn-primary"
      >
        Save
      </button>
      <button
        type="button"
        onClick={cancelEdit}
        className="btn_cell btn-cancel"
      >
        Cancel
      </button>
    </div>
  </td>
);

export default EditableCell;

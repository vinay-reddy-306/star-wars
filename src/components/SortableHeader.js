import React from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import "../App.css";

const SortableHeader = ({ label, headerKey, sortKey, sortOrder, setSortKey, setSortOrder }) => {
  const isActive = headerKey === sortKey;

  const toggleOrder = () => {
    if (isActive) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(headerKey);
      setSortOrder("asc");
    }
  };

  const renderIcon = () => {
    const iconClass = "sort-icon" + (!isActive ? " inactive" : "");
    if (!isActive) return <FaSort className={iconClass} />;
    return sortOrder === "asc" ? <FaSortUp className="sort-icon" /> : <FaSortDown className="sort-icon" />;
  };

  return (
    <th className="sortable-header" onClick={toggleOrder}>
      <span className="sortable-header-content">
        {label} {renderIcon()}
      </span>
    </th>
  );
};

export default SortableHeader;

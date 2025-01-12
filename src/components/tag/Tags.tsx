import React from "react";
import './Tags.css';
import Chip from "@mui/material/Chip";

interface TagsProps {
  labels: string[];
}

const Tags: React.FC<TagsProps> = ({ labels }) => {
  return (
    <div className="tag-container">
      {labels?.map((label) => <div className="tag" key={label}><Chip label={label} variant="outlined"  /></div>)}
    </div>
  );
};

export default Tags;

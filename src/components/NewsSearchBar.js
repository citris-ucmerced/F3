import { TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const NewsSearchBar = () => {
  return (
    <form className="news-search-bar">
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {}}
        label="Enter a keyword..."
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton aria-label="search" sx={{ marginLeft:'1rem'}}>
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );
};

export default NewsSearchBar;

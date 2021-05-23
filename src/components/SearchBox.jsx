import classes from "./SearchBox.module.css";

const SearchBox = ({ placeholder, changeHandler }) => {
  return (
    <div>
      <input
        className={classes.search}
        type="search"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBox;

import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { selectNameFilter } from "../redux/filters/selectors";
import { changeFilter } from "../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={styles.container}>
      <label className={styles.title} htmlFor="findContact">
        <b className={styles.title}>FIND CONTACT BY NAME</b>
        <input
          className={styles.searchinput}
          name="findContact"
          type="text"
          placeholder="Rosie Simpson"
          value={filter}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
};

export default SearchBox;

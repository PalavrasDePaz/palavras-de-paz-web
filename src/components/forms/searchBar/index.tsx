import { IoSearch } from "react-icons/io5";

import styles from "./styles.module.css";

export default function SearchBar() {
  return (
    <div className={styles.search_container}>
      <IoSearch size={24} />
      <input
        type="search"
        className={styles.search_input}
        placeholder="Procurar"
      />
    </div>
  );
}

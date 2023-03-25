import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import cn from "classnames";
import { Input, Button } from "..";
import SearchIcon from "./search.svg";
import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск..."
        onKeyDown={handleKeyDown}
      />
      <Button
        className={styles.button}
        onClick={goToSearch}
        appearance="primary"
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

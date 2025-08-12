import Link from "next/link";
import css from "./TagsMenu.module.css";

export default function TagsMenu() {
  const categories = ["Work", "Personal", "Meeting", "Shopping", "Todo"];
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {/* список тегів */}
        <li className={css.menuLink}>
          <Link href={`/notes`}>All notes</Link>
        </li>
        {categories.map((cat) => {
          return (
            <li className={css.menuItem} key={cat}>
              <Link href={`/notes/filter/{tag}`} className={css.menuLink}>
                {cat}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

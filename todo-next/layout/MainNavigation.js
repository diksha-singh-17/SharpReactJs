import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>To Do</div>
      <nav>
        <ul>
          <li>
            <Link href="/events">Add To-Do</Link>
          </li>
          <li>
            <Link href="/">All ToDos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

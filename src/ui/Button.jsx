import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onclick }) {
  const base =
    "bg-yellow-400 text-sm font-semibold text-stone-800  inline-block tracking-wide rounded-full uppercase hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-400 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "border-2 text-sm border-stone-300 text-stone-400 font-semibold inline-block tracking-wide rounded-full uppercase hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-stone-400 disabled:cursor-not-allowed  px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onclick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onclick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;

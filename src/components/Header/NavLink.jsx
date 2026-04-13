function NavLink({ href, label, className }) {
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

export default NavLink;

export default function Icon({ id, name, className, onClick }) {
  return (
    <i
      id={id}
      onClick={onClick}
      className={`bi bi-${name} ${className} cursor-pointer`}></i>
  );
}

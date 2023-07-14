export default function Icon({ name, className, onClick }) {
  return <i onClick={onClick} className={`bi bi-${name} ${className}`}></i>;
}

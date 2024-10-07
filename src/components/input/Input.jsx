export default function Input(props) {
  const { type, placeholder, onChange, id } = props;
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      autoComplete="new-password"
      onChange={onChange}
      className="bg-neutral-50 w-full py-3 px-8 rounded-md placeholder:text-sm"
    />
  );
}

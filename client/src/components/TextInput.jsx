const TextInput = ({ type, placeholder, id, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className="p-3 border rounded-lg"
      onChange={onChange}
    />
  );
};

export default TextInput;

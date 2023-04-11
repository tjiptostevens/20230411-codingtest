const InputFilter = (props) => {
  const handleChange = (e) => {
    props.handleChange(e);
  };
  return (
    <div
      className="input-group"
      style={{ display: "flex", flexDirection: "row", width: "500px" }}
    >
      <label className="input-group-text" htmlFor="name">
        Filter by name or email:
      </label>
      <input
        className="form-control"
        type="text"
        name="name"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputFilter;

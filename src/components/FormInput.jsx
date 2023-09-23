const FormInput = ({ name, type, placeholder, label, error }) => {
  return (
    <div className="flex flex-col gap-y-2 relative">
      {label && (
        <label htmlFor={name} className="capitalize">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required
        className="text-[16px] placeholder:text-[14px] bg-[#FFFFFF08] border p-2.5 outline-none  rounded"
      />

      <p className="absolute first-letter:capitalize -bottom-6 left-0 text-red-600 text-[12px]">
        {error}
      </p>
    </div>
  );
};
export default FormInput;

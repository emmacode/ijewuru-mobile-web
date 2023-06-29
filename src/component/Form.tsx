interface AuthFormProps {
  divClass: string;
  label: string;
  labelClass: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  className: string;
  name: string;
}

export const AuthForm: React.FC<AuthFormProps> = (props) => {
  const {
    divClass,
    label,
    labelClass,
    type,
    onChange,
    value,
    name,
    placeholder,
    className,
  } = props;

  return (
    <div className={divClass}>
      <label className={labelClass}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

import { styled } from "styled-components";

interface FormProps {
  divClass?: string;
  label?: string;
  labelClass?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  className?: string;
  name: string;
}

interface RadioProps extends FormProps {
  checked: boolean;
  image?: string;
  radioLabel?: string;
}

export const Form: React.FC<FormProps> = (props) => {
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

export const Radio: React.FC<RadioProps> = (props) => {
  const {
    divClass,
    label,
    labelClass,
    onChange,
    value,
    name,
    className,
    checked,
    image,
    radioLabel,
  } = props;

  return (
    <RadioItem className={divClass}>
      <input
        type="radio"
        name={name}
        onChange={onChange}
        value={value}
        className={className}
        checked={checked}
        id="specifyColor"
      />
      <RadioLabel className={radioLabel}>
        <img src={image} alt="" />
        <label className={labelClass}>{label}</label>
      </RadioLabel>
    </RadioItem>
  );
};

export const RadioItem = styled.div`
  display: flex;
  align-items: center;

  input[type="radio"]#specifyColor {
    accent-color: #fa4a0c;
  }
`;

export const RadioLabel = styled.div`
  display: flex;
  align-items: center;
`;

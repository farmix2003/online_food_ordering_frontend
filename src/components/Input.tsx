const Input: React.FC<Inputs> = ({ type, classes, placeholder }) => {
  return <input type={type} className={classes} placeholder={placeholder} />;
};

interface Inputs {
  type: string;
  classes: string;
  placeholder: string;
}
export default Input;

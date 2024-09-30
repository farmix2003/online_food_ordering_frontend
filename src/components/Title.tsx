type TitleProps = {
  title: string;
  classes: string;
};
const Title = ({ title, classes }: TitleProps) => {
  return (
    <div>
      <p className={classes}>{title}</p>
    </div>
  );
};

export default Title;

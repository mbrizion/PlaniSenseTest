import "./style.scss";

const Title = ({ gender, count }: any) => {
  return (
    <div className="title">
      <span className="gender">{gender}</span>
      <span className="count">{count}</span>
    </div>
  );
};

export default Title;

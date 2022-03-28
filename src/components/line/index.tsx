import { Line } from "./styles";

interface IProps {
    styledWidth?: number;
}

const StyledLine: React.FC<IProps> = ({ styledWidth }) => {
const styles = {
    width: styledWidth,
}
  return <Line style={styles} />;
};

export default StyledLine;

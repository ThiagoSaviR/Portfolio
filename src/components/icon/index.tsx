import { Wrapper, IconLink, IconImg } from "./styles";

interface Iprops {
  img: any;
  alt: string;
  reference: string;
}

const IconImage: React.FC<Iprops> = ({ img, alt, reference }) => {
  return (
    <Wrapper>
      <IconLink href={reference} target="_blank">
        <IconImg src={img} alt={alt} />
      </IconLink>
    </Wrapper>
  );
};

export default IconImage;

import "ldrs/ring";

const loadingSpinner = ({ Color, Size }: { Color?: string; Size?: number }) => {
  //just a disclaimer this always returns an error even tho it works perfectly fine
  //I honestly just don't know how to fix it trust me I've tried my hardest
  return <l-ring color={Color || "white"} size={Size || 30}></l-ring>;
};

export default loadingSpinner;

import MessageCard from "../MessageCard/MessageCard";
const CardSkeleton = ({ count }: { count?: number }) => {
  return (
    <>
      {Array(count || 1)
        .fill(0)
        .map(() => (
          <MessageCard />
        ))}
    </>
  );
};

export default CardSkeleton;

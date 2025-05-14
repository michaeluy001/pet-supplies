export const ProductCard = (props) => {
  return (
    <>
      <div className="h-100 w-full bg-[var(--warm-sand)] items-center p-2 overflow-hidden flex flex-col">
        <div className="size-60 overflow-hidden justify-items-center flex">
          <img
            src={props.item.src}
            alt={props.item.name}
            className="size-60 object-cover"
          />
        </div>
        <ul className="text-sm p-5 space-y-0.5 tracking-wider">
          <li className="text-md font-bold text-gray-600">{props.item.name}</li>
          <li>{props.item.model}</li>
          <li>{props.item.availability}</li>
          <li>{props.item.price}</li>
        </ul>
      </div>
    </>
  );
};

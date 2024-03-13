import Image from "next/image";
import pageNotFound from "@/public/pageNotFound.png";
type Props = {};

const PLaceHolderComponent = (props: Props) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative h-1/2 w-full md:h-full md:w-full">
        <Image
          src={pageNotFound}
          alt="Page Not Found PlaceHolder"
          fill
          placeholder="blur"
          className="object-fill"
        />
      </div>
    </div>
  );
};

export default PLaceHolderComponent;

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

import { FC } from "react";

type Props = {
  className: string;
  url: StaticImageData;
};

const PLaceHolderComponent: FC<Props> = ({ className, url }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className={cn("relative", className)}>
        <Image
          src={url}
          alt="Page Not Found PlaceHolder"
          fill
          placeholder="blur"
          className="object-fill"
          sizes="(max-width: 768px) 100vw,"
        />
      </div>
    </div>
  );
};

export default PLaceHolderComponent;
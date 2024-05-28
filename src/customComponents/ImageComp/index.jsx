import Image from "next/image";
import React from "react";

const CustomImage = ({
  src,
  alt,
  height,
  width,
  unoptimized,
  onClick,
  style,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      suppressHydrationWarning={true}
      suppressContentEditableWarning={true}
      about="image"
      fetchPriority="auto"
      unoptimized={unoptimized && unoptimized}
      onClick={onClick && onClick}
      style={style && style}
      quality={100}
      //   overrideSrc={src}
      accessKey={alt}
      spellCheck="true"
      aria-hidden="false"
      lang="en"
      aria-label={alt}
      priority={unoptimized === false ? true : false}
      aria-haspopup="false"
      autoFocus={false}
      content={alt}
      title={alt}
      blurDataURL={src}
      crossOrigin="anonymous"
      unselectable="off"
    />
  );
};

export default CustomImage;

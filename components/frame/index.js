import Image from "next/image";
import Link from "next/link";

export default function Photo({ photo }) {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>
          <Link href="/photos/9">click me</Link>
        </h3>
        <h3>
          <Link href="/">close</Link>
        </h3>
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div>
    </>
  );
}

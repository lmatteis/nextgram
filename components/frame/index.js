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
        <h3 className="text-blue-600 underline">
          <Link href="/photos/8">go to photo id 8</Link>
        </h3>
        <h3 className="text-blue-600 underline">
          <Link href="/">close</Link>
        </h3>
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div>
    </>
  );
}

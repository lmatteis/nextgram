import Photo from "../../../../components/frame";
import Modal from "../../../../components/modal";
import swagPhotos from "../../../../photos";

export default async function PhotoModal({ params: { id: photoId } }) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // artificial delay
  const photos = swagPhotos;
  const photo = photoId && photos.find((p) => p.id === photoId);

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
}

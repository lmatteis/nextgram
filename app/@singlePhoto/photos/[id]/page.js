import React from "react";
import Photo from "../../../../components/frame";
import swagPhotos from "../../../../photos";
import Modal from "../../../../components/modal";

export default function PhotoPage({ params: { id } }) {
  const photo = swagPhotos.find((p) => p.id === id);

  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
}

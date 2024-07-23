/* eslint-disable react/prop-types */
import { Button, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "sonner";
import { CreateKonten } from "../../../api/ApiContent";


export default function AddContentModal({ isOpen, onOpenChange }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    function handleContentImage(event) {
        setImage(event.target.files[0]);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        console.log(title, description, image)

        if (title === "" || description === "" || image === "") {
            toast.error("Semua kolom harus diisi");
            return;
        }

        const formData = new FormData();

        formData.append("title", title);
        formData.append("content", description);
        formData.append("image", image);

        const response = await CreateKonten(formData);

        setTitle("");
        setDescription("");
        setImage(null);

        onOpenChange(true);

        toast.success("Konten berhasil ditambahkan");
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1 text-2xl">Tambah Konten</ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col gap-4">
                                <Input
                                    label="Judul"
                                    placeholder="Masukkan judul konten"
                                    onChange={(e) => (setTitle(e.target.value))}
                                    name="title"
                                />
                                <Input
                                    label="Deskripsi"
                                    placeholder="Masukkan deskripsi konten"
                                    onChange={(e) => (setDescription(e.target.value))}
                                    name="description"
                                />
                                <Button
                                    type="button"
                                    color="primary"
                                    onClick={() => document.getElementById("content-image").click()}
                                >
                                    Pilih Gambar
                                </Button>
                                <input
                                    type="file"
                                    name="image"
                                    id="content-image"
                                    onChange={handleContentImage}
                                    accept="image/*"
                                    className="hidden"
                                ></input>
                                {image && (
                                    <>
                                        <p className='text-sm mt-2'>Gambar Konten:</p>
                                        <Image
                                            src={URL.createObjectURL(image)}
                                            alt="content-image"
                                            width={150}
                                            height={150}
                                        />
                                    </>
                                )}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Batal
                            </Button>
                            <Button color="primary" type="submit">
                                Tambah
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>

        </Modal>
    )
}
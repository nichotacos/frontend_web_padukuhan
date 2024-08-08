/* eslint-disable react/prop-types */
import { Button, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { EditKonten } from "../../../api/ApiContent";

export default function EditContentModal({ content, isOpen, onOpenChange }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (content) {
            setTitle(content.title || "");
            setDescription(content.content || "");
            // setImage(content.image || null);
        }
    }, []);

    function handleContentImage(event) {
        setImage(event.target.files[0]);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (title === "" || description === "" || !image) {
            toast.error("Semua kolom harus diisi");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);

        const newData = {
            title: title,
            description: description,
            image: image
        }

        console.log(newData);

        const response = await EditKonten(newData);
        console.log(response);

        setTitle("");
        setDescription("");
        setImage(null);

        onOpenChange(false);

        toast.success("Konten berhasil ditambahkan");
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1 text-2xl">Edit Konten</ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col gap-4">
                                <Input
                                    label="Judul"
                                    placeholder="Masukkan judul konten"
                                    onChange={(e) => setTitle(e.target.value)}
                                    name="title"
                                    value={title}
                                />
                                <Input
                                    label="Deskripsi"
                                    placeholder="Masukkan deskripsi konten"
                                    onChange={(e) => setDescription(e.target.value)}
                                    name="description"
                                    value={description}
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
                                {image ? (
                                    <>
                                        <p className='text-sm mt-2'>Gambar Konten:</p>
                                        <Image
                                            src={URL.createObjectURL(image)}
                                            alt="content-image"
                                            width={150}
                                            height={150}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <p className='text-sm mt-2'>Gambar Konten:</p>
                                        <Image
                                            src={content.image ?? ""}
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
                                Simpan
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    )
}

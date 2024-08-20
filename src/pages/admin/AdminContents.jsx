import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, useDisclosure, Image } from "@nextui-org/react";
import AddContentModal from "./components/AddContentModal";
import { useEffect, useState } from "react";
import { DeleteKonten, FetchKonten } from "../../api/ApiContent";
import Loader from "../../components/Loading";
import EditContentModal from "./components/EditContentModal";
import { toast } from "sonner";

export default function AdminContents() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);

    useEffect(() => {
        const fetchContents = async () => {
            try {
                setLoading(true);
                const response = await FetchKonten();
                console.log(response.data);
                setContents(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchContents();
    }, []);

    function handleEditContent(content) {
        setSelectedContent(content);
        onEditOpen();
    }

    async function handleDeleteContent(id) {
        try {
            setLoading(true);
            const response = await DeleteKonten(id);
            console.log(response);
            toast.success("Konten berhasil dihapus");
        } catch (error) {
            console.error('Error deleting content:', error);
            toast.error("Gagal menghapus konten");
        } finally {
            setLoading(false);
        }
    }

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isEditOpen, onOpen: onEditOpen, onOpenChange: onEditOpenChange } = useDisclosure();

    // const token = localStorage.getItem("token");

    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <AddContentModal isOpen={isOpen} onOpenChange={onOpenChange} />
                    <EditContentModal content={selectedContent} isOpen={isEditOpen} onOpenChange={onEditOpenChange} />
                    <div className="bg-duwet-main-bg w-full flex justify-center items-center">
                        <div className="py-2 sm:py-4 lg:py-8 w-11/12 lg:w-4/5">
                            <div>
                                <h1 className="text-2xl lg:text-4xl font-bold">Semua Konten</h1>
                                <Button className="mt-4 lg:mt-8 mb-4 font-bold text-sm lg:text-lg" color="warning" onPress={onOpen}>
                                    Tambah Konten
                                </Button>
                                <Table aria-label="Example static collection table" isStriped>
                                    <TableHeader>
                                        <TableColumn className="w-1/12"><p className="text-xs lg:text-sm">No.</p></TableColumn>
                                        <TableColumn className="w-2/12"><p className="text-xs lg:text-sm">Judul</p></TableColumn>
                                        <TableColumn className="w-5/12"><p className="text-xs lg:text-sm">Deskirpsi</p></TableColumn>
                                        <TableColumn className="w-3/12"><p className="text-xs lg:text-sm">Gambar</p></TableColumn>
                                        <TableColumn className="w-1/12"><p className="text-xs lg:text-sm">Aksi</p></TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        {contents.map((content) => (
                                            <TableRow key={content.id}>
                                                <TableCell className="text-xs lg:text-base text-pretty">{content.id}</TableCell>
                                                <TableCell className="text-xs lg:text-base text-pretty">{content.title}</TableCell>
                                                <TableCell className="text-xs lg:text-base text-pretty">{content.content}</TableCell>
                                                <TableCell>
                                                    <Image src={content.image} width={250} height={250} />
                                                </TableCell>
                                                <TableCell>
                                                    <Button color="success" className="text-xs lg:text-base font-bold my-1 lg:my-2" onPress={() => handleEditContent(content)}>Edit</Button>
                                                    <Button color="danger" className="text-xs lg:text-base font-bold my-1 lg:my-2" onPress={() => handleDeleteContent(content.id)}>{loading ? "Loading..." : "Delete"}</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, useDisclosure, Image } from "@nextui-org/react";
import AddContentModal from "./components/AddContentModal";
import { useEffect, useState } from "react";
import { FetchKonten } from "../../api/ApiContent";
import Loader from "../../components/Loading";

export default function AdminContents({ isSideBarOpen }) {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const token = localStorage.getItem("token");

    const checker = isSideBarOpen ? "ml-80 mt-20" : "ml-30 mt-20";

    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <AddContentModal isOpen={isOpen} onOpenChange={onOpenChange} />
                    <div className="ml-28 lg:ml-80 mt-10">
                        <h1 className="text-base lg:text-4xl font-bold">Semua Konten</h1>
                        <Button className="mt-8 mb-4 font-bold text-lg" color="warning" onPress={onOpen}>
                            Tambah Konten
                        </Button>
                        <Table aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn><p className="text-sm">ID</p></TableColumn>
                                <TableColumn><p className="text-sm">Judul</p></TableColumn>
                                <TableColumn><p className="text-sm">Deskirpsi</p></TableColumn>
                                <TableColumn><p className="text-sm">Gambar</p></TableColumn>
                                <TableColumn><p className="text-sm">Aksi</p></TableColumn>
                            </TableHeader>
                            <TableBody>
                                {contents.map((content) => (
                                    <TableRow key={content.id}>
                                        <TableCell className="text-lg text-pretty">{content.id}</TableCell>
                                        <TableCell className="text-lg text-pretty">{content.title}</TableCell>
                                        <TableCell className="text-lg text-pretty">{content.content}</TableCell>
                                        <TableCell>
                                            <Image src={content.image} width={250} height={250} />
                                        </TableCell>
                                        <TableCell className="flex flex-col gap-8 justify-center                                ">
                                            <Button color="success" className="text-lg font-bold">Edit</Button>
                                            <Button color="danger" className="text-lg font-bold">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </>
            )}
        </>
    );
}

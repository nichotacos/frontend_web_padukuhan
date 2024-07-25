import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, useDisclosure, Image } from "@nextui-org/react";
import AddContentModal from "./components/AddContentModal";
import { useEffect, useState } from "react";
import { FetchKonten } from "../../api/ApiContent";

export default function AdminContents() {
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

    return (
        <>
            {loading ? <p>Loading...</p> : (
                <>
                    <AddContentModal isOpen={isOpen} onOpenChange={onOpenChange} />
                    <div className="ml-80 mt-20">
                        <h1 className="text-4xl font-bold">Admin Contents</h1>
                        <p>{token}</p>
                        <Button className="mt-8 mb-4 font-bold text-lg" color="warning" onPress={onOpen}>
                            Add Content
                        </Button>
                        <Table aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn><p className="text-sm">ID</p></TableColumn>
                                <TableColumn><p className="text-sm">Judul</p></TableColumn>
                                <TableColumn><p className="text-sm">Deskirpsi</p></TableColumn>
                                <TableColumn><p className="text-sm">Gambar</p></TableColumn>
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

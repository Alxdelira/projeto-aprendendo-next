import Button from "@/components/Button";
import Container from "@/components/Container";
import FormGroup from "@/components/FormGroup";
import FormItem from "@/components/FormItem";
import H from "@/components/H";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Tbody from "@/components/Tbody";
import Td from "@/components/Td";
import Text from "@/components/Text";
import Th from "@/components/Th";
import Thead from "@/components/Thead";
import Tr from "@/components/Tr";
import { api } from "@/service/apiClient";
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";


export default function ListarUsuarios() {

  const router = useRouter();

  const [usuarios, setUsuarios] = useState(null);
  const maxDocs = useRef(null);
  const maxPages = useRef(null);
  const nome = useRef(null);
  const email = useRef(null);

  async function listarUsuarios() {
    try {
      const page = router.query.page || null;
      const nomeRef = nome.current?.value || "";
      const emailRef = email.current?.value || "";

      if (page) {
        const res = await api.get(`/usuarios?page=${page}&nome=${nomeRef}&email=${emailRef}`)
        setUsuarios(res.data.docs);
        maxDocs.current = res.data.totalDocs;
        maxPages.current = res.data.totalPages;
        console.log(res)
      }

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    listarUsuarios();
  }, [router.query]);

  if (!usuarios) {
    return <>
      <Loading />
    </>
  }



  return (
    <>
      <Container>
        <H level={1}>Listar Usuarios</H>
      </Container>

      <Container>
        <FormGroup>
          <FormItem>
            <Label>Nome</Label>
            <Input type="text" ref={nome} />
          </FormItem>
          <FormItem>
            <Label>E-mail</Label>
            <Input type="email" ref={email} />
          </FormItem>
          <FormGroup>
            <FormItem margin="5px">
              <Button onClick={listarUsuarios} >Buscar</Button>
            </FormItem>
          </FormGroup>
        </FormGroup>
      </Container>

      <Container>
        <H level={2}>Resultados</H>
        {maxDocs.current > 0 && (
          <Text>{maxDocs.current} Usuários Encontrados</Text>
        )}
      </Container>

      <Container margin_top="1rem">
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>Situação</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usuarios?.map((usuario) => (
              <Tr key={usuario._id}>
                <Td>{usuario._id}</Td>
                <Td>{usuario.nome}</Td>
                <Td>{usuario.email}</Td>
                <Td>{usuario.ativo == true ? "Ativo" : "Inativo"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      <Container margin_top="1rem">
        <Pagination
          link="/usuarios/listar/"
          numberPages={maxPages.current}
          maxPageComponent={5}
          selectPage={router.query.page}
        />
      </Container>
    </>
  )
}
import Container from "@/components/Container"
import H from "@/components/H"
import Head from "next/head"


export default function Home() {
  return (

    <>
      <Head>
        <title>Home</title>
      </Head>

      <H level={1}>Seja Bem Vindo!</H>

      <Container margin="1rem">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corrupti soluta voluptatibus error! Aut eligendi incidunt obcaecati deleniti, voluptatum laborum doloribus nihil maiores unde? Quia sapiente sed dolor velit ducimus.</p>
      </Container>
      
    </>
  )
}
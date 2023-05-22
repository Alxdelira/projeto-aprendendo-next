import H from "@/components/H"
import Head from "next/head"
import Link from "next/link"
import Text from "@/components/Text"


export default function Home() {
  return (

    <>
      <Head>
        <title>Home</title>
      </Head>

      <H level={1}>Olá, seja bem vindo !</H>

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "2rem"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <H level={2}>Sobre</H>
          <Text>Olá seja bem vindo ao meu projeto</Text>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <H level={2}>Tecnologias</H>
          <Text>Front-end - Next JS</Text>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <H level={2}>Redes Socias</H>
          <Link href="https://www.linkedin.com/in/alxdelira/">
            <Text style={{ textDecoration: "underline" }}>Linkedin</Text>
          </Link>
        </div >
      </div >

    </>
  )
}
import React from "react";
import Container from "@/components/Container";
import Form from "@/components/Form";
import H from "@/components/H";
import Head from "next/head";
import classNames from "classnames";
import styles from "./styles.module.scss";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            <H level={1}>Sobre</H>
            <Container>

                <Form>
                    <div className={styles.perfil}>
                        <img className={styles.image} src="https://media.licdn.com/dms/image/D4D03AQGaZ7N-jflPbg/profile-displayphoto-shrink_200_200/0/1678377960854?e=1691020800&v=beta&t=TG5Pe3BKSGto63R6Uqi_-uhoIz4M3iKJTQqAa6xOMRs" />
                    </div>
                    <div className={classNames(styles.contentWrapper, "centered")}>
                        <p className={styles.text}>
                            Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras e funcionais, tanto no front-end quanto no back-end. Meu objetivo é combinar habilidades em React, Next.js, MongoDB, Node.js e SASS para construir aplicações web de alta qualidade.
                            <br />
                            <br />
                            No front-end, utilizo o poderoso framework React para criar interfaces de usuário interativas e responsivas. Com o React, posso desenvolver componentes reutilizáveis e construir uma experiência de usuário fluida e intuitiva. Além disso, aproveito a versatilidade do Next.js para criar aplicações web de alto desempenho, com suporte a SSR (Server-Side Rendering) e SSG (Static Site Generation).
                            <br />
                            <br />
                            No back-end, tenho experiência sólida em trabalhar com o MongoDB, um banco de dados NoSQL altamente escalável e flexível. Com o Node.js, consigo criar servidores eficientes e escaláveis, permitindo o processamento assíncrono e a construção de APIs RESTful robustas.
                            <br />
                            <br />
                            Para estilização, faço uso do SASS, uma linguagem de folha de estilos que me proporciona um alto grau de controle e organização. Com o SASS, posso criar estilos reutilizáveis, aninhar seletores, utilizar variáveis e mixins, tornando o processo de desenvolvimento mais eficiente e fácil de dar manutenção.
                            <br />
                            <br />
                            Tenho uma abordagem focada no usuário e estou sempre atento às melhores práticas de design e usabilidade. Busco criar interfaces intuitivas e atraentes, garantindo uma experiência de usuário excepcional.
                            <br />
                            <br />
                            Além dessas tecnologias mencionadas, estou constantemente atualizando meus conhecimentos e aprendendo novas ferramentas e frameworks que possam agregar valor aos meus projetos.
                            <br />
                            <br />
                            Estou sempre pronto para enfrentar desafios e colaborar com equipes multidisciplinares. Se você está procurando um desenvolvedor front-end e back-end comprometido em entregar soluções de qualidade, estou ansioso para fazer parte do seu projeto. Vamos trabalhar juntos para transformar ideias em realidade e criar experiências digitais incríveis!
                        </p>
                    </div>
                </Form>
            </Container>
        </>
    );
}

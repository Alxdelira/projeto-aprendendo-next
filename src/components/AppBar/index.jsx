import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Modal from '../Modal';
import Button from '../Button';
import Container from '../Container';

export default function AppBar({ title }) {

  const router = useRouter();

  const [modalSair, setModalSair] = useState(false);

  function logout() {
    const { "cras-token": token } = parseCookies();

    if (token) {
      destroyCookie(undefined, "cras-token");
      router.push("/")
    }
  }

  return (
    <>
    {modalSair && (
      <Modal minWidth="30%" modalTitle="Tem certeza que deseja sair ?" booleanFunction={() => setModalSair(false)}>
        <Container margin_top="2rem" justifyCenter="true">
          <Button onClick={() => logout()}>Sim</Button>
          <Button onClick={() => setModalSair(false)} danger="true">Não</Button>
        </Container>
      </Modal>
    )}
    
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.options}>
          <div className={styles.link}><Link href="/usuarios/perfil">Meu Perfil</Link></div>
          <div className={styles.logout} title='Sair da plataforma' onClick={() => setModalSair(true)}>
            <p>Sair</p>
          </div>
        </div>
      </header>
    </>
  )
}
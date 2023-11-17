import { onAuthStateChanged } from "firebase/auth";
import { Container, Row, Col } from "react-bootstrap";
import { auth } from "../lib/firebase";
import BrowserTab from "./BrowserTab";
import NavigationBar from "./NavigationBar";
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  onAuthStateChanged(auth, (user) => {
    if (typeof window === 'undefined') {
      return;
    }
    if (user) {
      localStorage.setItem("userId", user.uid);
    } else {
      localStorage.removeItem("userId");
      window.location.href = "/";
    }
  });

  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col>
            <BrowserTab />
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};


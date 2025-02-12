import { Container } from "@/components/Container";
import FooterPage from "@/components/Footer";
import { HeaderPage } from "@/components/Header";

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <HeaderPage />
      <div className="container-form">
        <Container />
        {children}
      </div>
      <FooterPage />
    </section>
  );
}

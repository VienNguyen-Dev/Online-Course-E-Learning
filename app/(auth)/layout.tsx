import { Container } from "@/components/Container";
import FooterPage from "@/components/Footer";

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="container-form">
        <Container />
        {children}
      </div>
      <FooterPage />
    </section>
  );
}

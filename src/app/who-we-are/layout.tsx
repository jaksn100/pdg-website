import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function WhoWeAreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

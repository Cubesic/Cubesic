import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'Cubesic',
    description: 'Cubesic',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col justify-center">
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

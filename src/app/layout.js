import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/Footer/Footer';
import siteMetadata from '../utils/siteMetaData';

export const metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        template: `%s | ${siteMetadata.title}`,
        default: siteMetadata.title, // a default is required when creating a template
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.title,
        images: [siteMetadata.socialBanner],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        images: [siteMetadata.socialBanner],
    },
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

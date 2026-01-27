import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'Perspective Design Group | Consulting Excellence',
    description: 'PDG is a trusted consulting partner delivering expertise in GRC, Atlassian, IAM, Cloud, and more. 16 years of government and enterprise excellence.',
    keywords: 'IT, Consulting, government consulting, GRC, Atlassian, IAM, cloud development, Ohio',
    authors: [{ name: 'Perspective Design Group' }],
    openGraph: {
        title: 'Perspective Design Group | Consulting Excellence',
        description: 'PDG is a trusted consulting partner with 16 years of government and enterprise expertise.',
        type: 'website',
        locale: 'en_US',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Adobe Fonts - Kanit */}
                <link rel="stylesheet" href="https://use.typekit.net/zid1fas.css" />
                {/* Font Awesome Pro */}
                <script
                    src="https://kit.fontawesome.com/31d7307035.js"
                    crossOrigin="anonymous"
                    async
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

import Head from 'next/head'
import Footer from '@components/Footer'
import Header from '@components/Header';
import TopNav from '@components/TopNav';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/faviconpersonalwebsite.png" />
            </Head>
            <TopNav /> {/* <-- inserted TopNavbar */}
            <Header />

            <Footer />
        </div>
    )
}
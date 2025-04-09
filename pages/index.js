import Head from 'next/head'
import TopNav from '@components/TopNav';
import UnderConstruction from "@components/UnderConstruction";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Under Construction</title>
                <link rel="icon" href="/faviconpersonalwebsite.png" />
            </Head>
            <TopNav /> {/* <-- inserted TopNavbar */}
            <UnderConstruction />

        </div>
    )
}
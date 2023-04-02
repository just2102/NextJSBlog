import Link from "next/link";
import Image from "next/image";
import profileImg from "../../public/images/profile.jpg"
import Head from "next/head";
import Layout from "../../components/Layout";

const MyProFile = () => {
    return ( 
        <Layout home={true}>
        <Head>
            <title>My profile</title>
        </Head>
        <div>
            <h3>My profile</h3>
            <p>My name is Ilia</p>
            <Image height={144} width={144} src={profileImg} alt="profileImage">

            </Image>
        </div>
        </Layout>
     );
}
 
export default MyProFile;
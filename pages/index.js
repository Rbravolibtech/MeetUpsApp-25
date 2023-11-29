import Head from "next/head"
import {MongoClient} from "mongodb"
import { Fragment } from "react"


import MeetupList from "../components/meetups/meetupList"


function HomePage(props){
    return(
    <Fragment>
        <Head>
<title>REACT MEETUPS</title>
<meta name="description" content="Browse a huge list of highly active react meetups"/>
        </Head>
        <MeetupList meetups={props.meetups}/>
    </Fragment>
    )
}


export async function getStaticProps() {
    //fetch data from an API OR DATA BASE 

    const client =  MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.rfre0.mongodb.net/?")
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

   const meetups =  await meetupsCollection.find().toArray();

   client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate:1
    }
}

 export default HomePage
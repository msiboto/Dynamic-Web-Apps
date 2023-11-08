/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
 import React from "react"
 import Navbar from "./component/Navbar"
 import Hero from "./component/Hero"
 import Card from "./component/Card"
 import data from "./data"
 
 // import Contacts from "./component/Contacts"
// import Jokes from "./component/Jokes"
// import JokesData from "./component/JokesData"

export default function App() {
    const cards = data.map(item => {
        return (
            // eslint-disable-next-line react/jsx-key
            <Card 
                key={item.id}
                item={item} />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
/*

<div className="contacts">
                <Contacts
                img="./images/zaferes.png"
                name="Mr. Whiskerson"
                number="(212)555-1234"
                email="mr.whiskaz@catnap.meow" />
                <Contacts
                img="./images/zaferes.png"
                name="Mrs. Whin"
                number="(212)555-4321"
                email="mr.whiskaz@catnap.meow" />
                <Contacts 
                img="./images/zaferes.png"
                name="Mrs. Whison"
                number="(212)555-1234"
                email="mr.whiskaz@catnap.meow"/>
                <Contacts
                img="./images/zaferes.png"
                name="Mr. Son"
                number="(212)555-1234"
                email="mr.whiskaz@catnap.meow" />
            </div>
            


<div className="jokes">
                <Jokes
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it." />
                <Jokes
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!" />
                 <Jokes
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm." />
                 <Jokes
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!" />
            </div>
            */
/*

                
            export default function App() {
                const jokeElement = JokesData.map(Jokes => {
                    return   <Jokes setup={Jokes.setup} punchline={Jokes.punchline} />
                })
                return(
                        <div>
                            {jokeElement}
                        </div>
                )
            }



            // <Joke 
            //     punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            // />
            // <Joke 
            //     setup="I got my daughter a fridge for her birthday." 
            //     punchline="I can't wait to see her face light up when she opens it." 
            //     isPun={false}
            // />
            // <Joke 
            //     setup="How did the hacker escape the police?" 
            //     punchline="He just ransomware!"
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why don't pirates travel on mountain roads?" 
            //     punchline="Scurvy." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why do bees stay in the hive in the winter?" 
            //     punchline="Swarm." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="What's the best thing about Switzerland?" 
            //     punchline="I don't know, but the flag is a big plus!" 
            //     isPun={false}
            // />
            */
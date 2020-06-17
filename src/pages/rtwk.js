import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function RTWK() {
  return (
    <Layout>
      <SEO title="RTWK" />
      <h1 className="secondary-title-font normal-text-yellow">RTWK</h1>
      <p className="tertiary-title-font normal-text-yellow">
        (read: 'Re-Tweak') stands for Random Thoughts Worth Keeping. Some of
        them are not actually random. But essentially it is a collection of
        aphorism I came across plus some of my musings.
      </p>
      <section className="essay-container normal-text-yellow">
        <p>
          The older you get, the more you need to understand baby steps,
          especially in learning something or in relationship.
        </p>
        <p>
          To not care about what shitty things people think of you, you also need to
           not care about what shiny things people think of you.
        </p>
        <p>
          All of life forms strive to reach their maximum potential, except
          humans. A tree strives to grow as tall as it possibly could, a leopard
          strives to run as fast as it possibly could to catch a prey, but we
          humans can do nothing. This is because humans are granted with the
          misfortune of choice. We can choose not to.
        </p>
        <p>
          Is there anything more dangerous than dissatisfied and irresponsible
          gods who don't know what they want? - Sapiens by Yuval Noah Harari
        </p>
        <p>
          We created these fictions to serve us, but now we will give up our
          lives to serve them - Yuval
        </p>
        <p>Ted Mosby has the world's best memory. Fictionally-speaking.</p>
        <p>Growing up is realising that Ted Mosby is the bad guy.</p>
      </section>
    </Layout>
  )
}

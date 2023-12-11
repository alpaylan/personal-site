const data = [
  {
    id: 'the-lies-about-abstraction',
    title: 'The lies about abstraction',
    link: '/blog/the-lies-about-abstraction',
    date: '2023-12-02',
    desc: 'Below is an excerpt from Street Coder, where Sedat Kapanoglu talks about benefits of layering in software. A business layer doesn’t know anything about databases or storage techniques. It calls on the database layer for that. The database layer encapsulates the database functionality in a DB-agnostic fashion. This kind of separation of concerns can make the testability of business logic easier because we can easily plug a mocked implementation of the storage layer into the business layer.',
  },
  {
    id: 'software-demystified-how-does-a-text-box-work',
    title: 'Software Demystified: How does a Text Box Work?',
    link: '/blog/software-demystified-how-does-a-text-box-work',
    date: '2023-11-24',
    desc: 'Below is an excerpt from Street Coder, where Sedat Kapanoglu talks about opacity in software. Technology is becoming more opaque, like cars. People used to be able to repair their own cars. Now as the engines become increasingly advanced, all we see under the hood is a metal cover, like the one on a pharaoh’s tomb that will release cursed spirits onto whoever opens it. Software development technologies are no different. ',
  },
  {
    id: 'hurdles-of-designing-a-layout-model',
    title: 'Hurdles of Designing A Layout Model',
    link: '/blog/hurdles-of-designing-a-layout-model',
    date: '2023-08-06',
    desc: 'For the past 2 weeks, I have been working on designing my own layout model for the document generator I’ve been working on. I have successfully failed to come up with a sound modal that’s expressive enough for all my use cases. I decided to document my pains for (1) clearing my vision, (2) maybe helping out anyone who ever tries to go in similar routes, (3) finding people to help me design better as the best way to get answers to your questions on the internet is to provide wrong answers. So, let’s talk about some really wrong layout models.',
  },
  {
    id: 'fp-roadmap',
    title: 'An Introductory Roadmap Into The Functional Programming Concepts',
    link: '/blog/fp-roadmap',
    date: '2023-06-28',
    desc: 'Below are the topics I believe could be relevant to someone who would like to learn functional programming.',
  },
  {
    id: 'academia-vs-industry',
    title: 'Some Thoughts on Academia vs Industry(with a focus on Computer Science)',
    link: '/blog/academia-vs-industry',
    date: '2023-04-03',
    desc: 'Today, there was a short Twitter discussion on senior academics leaving academia to join industry as Software Architects, and I bluntly answered with the obvious "money motive". It\'s not a secret that industry pays better, but that\'s not the only relevance of money. Industry also spends more money too. Industrial labs get more clusters, more engineers,',
  },
  {
    id: 'where-did-all-the-writers-go',
    title: 'Where did all the writers go?',
    link: '/blog/where-did-all-the-writers-go',
    date: '2023-03-18',
    desc: 'Abundance is the root of dullness. We find scarcity interesting, we uphold scare items and concepts, scarcity is somehow "authentic", it is valueable. Before the age of mass machine manufacturing, machine produced goods were considered interesting, they were used as signals of authenticity. Yet, as mass production was generalized, cheapened, and democratized, world has seen a turn back to specialized goods. Hand-crafted items became evermore looked upon; today, unique products that "nobody else has" are more expensive, valuable, and appreciated than ever.',
  },
  {
    id: 'introduction-to-property-based-testing',
    title: 'Introduction to Property Based Testing',
    link: '/blog/introduction-to-property-based-testing',
    date: '2023-03-14',
    desc: 'Property Based Random Testing is a flavor of testing that aims to use higher level specifications for testing instead of hand-writing or generating tests. It was first developed by Koen Claessen and John Hughes in 1999 as a software library for Haskell, called QuickCheck. There has been substantial development in the field since then, I will not bore you with lots of details as the purpose of this writing is to familiarize you with PBT(Property Based Testing).',
  },
];

export default data;

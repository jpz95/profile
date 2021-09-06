import useTypeWriter from 'hooks/useTypeWriter.ts'

export default function Home() {
  const sentences = [
    { text: 'Hello there!', transitionDelay: 1500 }, // set to good morning/afternoon/evening
    { text: `I'm J.P., a detail-oriented frontend engineer`, transitionDelay: 2500 },
  ];
  const text = useTypeWriter(sentences);
  return (
    <div>
      <h2>{text}</h2>
      {/* <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link> */}
    </div>
  )
}

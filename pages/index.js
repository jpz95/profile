import useTypeWriter from 'hooks/useTypeWriter.ts'

export default function Home() {
  const sentences = [
    { text: 'OH, howdy!', period: 1500 }, // set to good morning/afternoon/evening
    { text: `I'm J.P., an experienced frontend engineer`, period: 2500 },
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

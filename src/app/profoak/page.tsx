import Image from 'next/image'

export default function ProfOak() {
  return (
    <section>
      <h1>Prof Oak</h1>
      <Image
        className=""
        src={'/ProfOak.png'}
        alt="Prof Oak"
        width={214}
        height={331}
      />
    </section>
  )
}

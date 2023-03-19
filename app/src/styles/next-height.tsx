export default function NextHeight100() {
  return (
    <style global jsx>{`
      html,
      body,
      div#__next {
        height: 100%;
      }
    `}</style>
  )
}

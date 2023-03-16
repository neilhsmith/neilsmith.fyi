import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image
        priority
        src="/portrait-100.jpg"
        width={72}
        height={72}
        alt="Small, stylized portrait of Neil Smith"
        className="rounded-full"
      />
      <h1 className="text-3xl font-thin md:text-4xl">neil smith</h1>
    </div>
  )
}

import Image from "next/image"

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Image src="/green-ufo-flying-saucer.jpg" alt="Green UFO" width={200} height={200} className="animate-bounce" />
        </div>
        <h1 className="mb-4 text-5xl font-bold text-primary">LexFiat</h1>
        <p className="text-xl text-muted-foreground">Beta access is in development.</p>
      </div>
    </div>
  )
}

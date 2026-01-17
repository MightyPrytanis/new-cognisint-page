import Image from "next/image"

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Image src="/green-ufo-flying-saucer.jpg" alt="Green UFO" width={200} height={200} className="animate-bounce" />
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">Hello World!</h1>
        <p className="text-xl text-muted-foreground">Beta access to LexFiat is coming soon...</p>
      </div>
    </div>
  )
}

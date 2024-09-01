export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold text-center">
          AI Doctor Chatting
        </h1>
        <p className="leading-normal text-muted-foreground text-center">
          Welcome to the AI Doctor Interface! This is a powerful tool that allows you to chat with a knowledgeable and experienced AI doctor, who can provide you with personalized medical advice and guidance. Whether you have a specific health concern, need to ask a general medical question, or simply want to learn more about maintaining a healthy lifestyle, our AI doctor is here to help. Simply type in your question or concern, and the AI will provide a detailed and informative response to assist you.
        </p>
      </div>
    </div>
  )
}
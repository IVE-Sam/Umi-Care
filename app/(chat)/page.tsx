import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'

export const metadata = {
  title: 'Welcome'
}

export default async function IndexPage() {
  const session = await auth();

  if (!session || !session.user) {
    return (
        <p className="text-white font-bold px-2 underline">Please log in to use Umi-Care services.</p>
    );
  }

  const id = nanoid();
  const missingKeys = await getMissingKeys();

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} session={session as Session} missingKeys={missingKeys} />
    </AI>
  );
}
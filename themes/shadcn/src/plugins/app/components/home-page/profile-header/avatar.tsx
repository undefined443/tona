import { useAvatar } from '@/plugins/app/hooks/use-avatar'

export function Avatar() {
  const avatar = useAvatar()

  return (
    <img
      className='!size-32 select-none rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40'
      alt="Zane's avatar"
      src={avatar}
      fetchPriority='high'
      decoding='sync'
    />
  )
}

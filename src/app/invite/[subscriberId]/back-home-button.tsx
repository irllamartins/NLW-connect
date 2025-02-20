'use client'
import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { CircleArrowLeftIcon, Copy, HomeIcon, Link } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function BackHomeButton() {
  const router = useRouter()
  return (
    <Button onClick={() => router.push('/')}>
      <CircleArrowLeftIcon className="size-6" />
      Voltar para tela inicial
    </Button>
  )
}

import { MousePointer } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AmountCardProps {
  title: string
  value: number
}

export function AmountCard({ title, value }: AmountCardProps) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <MousePointer className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          {value.toLocaleString('pt-BR')}
        </span>
        <p className="text-muted-foreground text-xs"></p>
      </CardContent>
    </Card>
  )
}

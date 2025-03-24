import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function CampaignTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>

      <Input placeholder="ID da campanha" className="h-8 w-auto" />
      <Input
        placeholder="Nome ou domínio da campanha"
        className="h-8 w-[320px]"
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="xs">
        <X className="h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}

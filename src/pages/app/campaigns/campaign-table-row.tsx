import { Pencil, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function CampaignTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes da campanha</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">1</TableCell>
      <TableCell className="font-medium">
        Teste de velocidade da Internet
      </TableCell>
      <TableCell className="font-medium">https://testenet.com.br</TableCell>
      <TableCell className="font-medium">31/12/2025</TableCell>
      <TableCell className="font-medium">21/03/2025</TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <Pencil className="mr-2 h-3 w-3" />
          Editar
        </Button>
      </TableCell>
    </TableRow>
  )
}

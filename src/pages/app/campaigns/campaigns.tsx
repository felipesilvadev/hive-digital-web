import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { CampaignTableFilters } from './campaign-table-filters'
import { CampaignTableRow } from './campaign-table-row'

export function Campaigns() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Campanhas</h1>

      <div className="space-y-2.5">
        <CampaignTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[64px]">Identificador</TableHead>
                <TableHead className="w-[300px]">Nome</TableHead>
                <TableHead className="w-[300px]">Domínio</TableHead>
                <TableHead className="w-[140px]">Expira em</TableHead>
                <TableHead className="w-[140px]">Criada em</TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <CampaignTableRow />
            </TableBody>
          </Table>
        </div>

        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </div>
  )
}

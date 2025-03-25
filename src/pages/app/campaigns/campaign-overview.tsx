import { useParams } from 'react-router-dom'

import { AmountCard } from '@/components/amount-card'

import { CampaignActionsChart } from './campaign-actions-chart'

export function CampaignOverview() {
  const { campaignId } = useParams()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Overview</h1>

      <div className="grid grid-cols-4 gap-4">
        <AmountCard title="Entrada na campanha" value={2050} />
        <AmountCard title="Iniciar teste" value={912} />
        <AmountCard title="Redirect botão afiliado" value={424} />
        <AmountCard title="Redirect banner afiliado" value={274} />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <CampaignActionsChart />
      </div>
    </div>
  )
}

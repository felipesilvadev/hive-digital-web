import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { useTheme } from '@/components/theme/theme-provider'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { id: 1, descricao: 'Entrada na campanha', quantidade: 2050 },
  { id: 2, descricao: 'Iniciar teste', quantidade: 912 },
  { id: 3, descricao: 'Redirect botão afiliado', quantidade: 424 },
  { id: 4, descricao: 'Redirect banner afiliado', quantidade: 274 },
]

export function CampaignActionsChart() {
  const { theme } = useTheme()

  return (
    <Card className="col-span-9">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Ações da campanha
          </CardTitle>
          <CardDescription>Disparos das ações na última semana</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="id" tickLine={false} axisLine={false} dy={16} />

            <YAxis
              stroke={colors.neutral['500']}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) => value.toLocaleString('pt-BR')}
              width={80}
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              dataKey="quantidade"
              type="linear"
              strokeWidth={2}
              stroke={colors.sky['500']}
            />

            <Tooltip
              wrapperClassName="rounded"
              labelClassName="font-semibold"
              labelFormatter={(value) => data[value - 1].descricao}
              formatter={(value: number) => [
                `Quantidade: ${value.toLocaleString('pt-BR')}`,
              ]}
              itemStyle={{
                color:
                  theme === 'dark' ? colors.neutral[100] : colors.neutral[700],
              }}
              contentStyle={{
                backgroundColor:
                  theme === 'dark' ? colors.neutral[700] : colors.neutral[100],
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

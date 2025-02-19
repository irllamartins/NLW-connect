import Image from 'next/image'
import medalCooper from '../../../assets/medal-cooper.svg'
import medalGold from '../../../assets/medal-gold.svg'
import medalSilver from '../../../assets/medal-silver.svg'
import { getRanking } from '@/http/api'

export async function Ranking() {
  const { ranking } = await getRanking()
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking.map((item, index: number) => {
          return (
            <div key={`item_${index+1}`} className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{index + 1}°</span> |{' '}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1030
              </span>
              {index===0&&<Image src={medalGold} alt=""className="absolute top-0 right-8"/>}
              {index===1&&<Image src={medalSilver} alt=""className="absolute top-0 right-8"/>}
              {index===2&&<Image src={medalCooper} alt=""className="absolute top-0 right-8"/>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

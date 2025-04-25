import { useEffect, useState } from "react"
import { fetchBodyWeight} from "./endpoints"

type WeightEntry = {
  date: string
  weight_morning: number
  weight_night: number
}

export function WeightChart() {
  const [data, setData] = useState<WeightEntry[]>([])

  useEffect(() => {
    async function fetchData() {
      try {

        const filteredData = await fetchBodyWeight()

        console.log("filteredData", filteredData)

        if (Array.isArray(filteredData)) {
          setData(filteredData as WeightEntry[])
        } else {
          console.error("Unexpected data format:", filteredData)
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
      }
    }

    fetchData()
  }, [])

  return data
}
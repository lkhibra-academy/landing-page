import { createContext, useContext } from "react";

export const DataContext = createContext({
    offers: [
        {
          value: 1050,
          label: `1050dh - ثلاثة أشهر كاملة`,
        },
        {
          value: 490,
          label: `490dh - كل شهر`,
        },
    ],
    setOffers: () => {}
})

export const useData = () => useContext(DataContext)

export { State } from "./State"
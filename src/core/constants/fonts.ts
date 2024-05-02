import {
  Figtree,
  Inter,
  Roboto_Mono,
  Roboto_Serif,
  Bai_Jamjuree
} from "next/font/google"
export const figtree = Figtree({ subsets: ["latin"] })
export const inter = Inter({ subsets: ["latin"] })
export const robotoSerif = Roboto_Serif({ subsets: ["latin"] })
export const roboto = Roboto_Mono({ subsets: ["latin"] })
export const baj = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import "bootstrap/dist/css/bootstrap.css"
import "./layout.module.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from '@/components/Header/Header'
import bg from "@/public/main-background.jpg"

config.autoAddCss = false

const poppins = Poppins({
    weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'] 
  })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} default`}>
        <Header />
        <div style={{backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center"}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

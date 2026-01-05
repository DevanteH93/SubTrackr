import Head from "./Head";
import "./globals.css";
import "./fanta.css";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";


export const metadata = {
  title: "SubTrackr ⋅ The Subscription Tracker",
  description: "Track all of your subscription analytics!",
};

export default function RootLayout({ children }) {

  const header = (
    <header>
      <div>
        <Link href={'/'}>
        <h1 className="text-gradient">SubTrackr</h1>
        </Link>
        <p>The Subscription Tracker</p>
      </div>
      <GoTo />
    </header>
  )
  
  const footer = (
    <footer>
      <div className="hard-line" />
      <div className="footer-content">
        <div>
          <div>
            <h4>SubTrackr</h4>
            <p>|</p>
            <button disabled>Install App</button>
          </div>
          <p className="copyright">© Copyright 2024-2025, Devante Harvey.<br />All rights reserved.</p>
        </div>
        <div>
          <p>Facing Issues? <a>Get Help</a></p>
          <p>Suggestions for improvement? <a>Share Feedback</a></p>
          <div>
            <Link href={'/privacy'}>Privacy Policy</Link>
            <Link href={'/tos'}>LinkTerms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )

  return (
    <html lang="en">
     <Head />
    <AuthProvider>
      <body>
        {header}
        <div className="full-line" />
        <main>
          {children}
        </main>
        {footer}
      </body>
     </AuthProvider>
    </html>
  );
}

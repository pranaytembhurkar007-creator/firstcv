import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'FirstCV — Resume Studio & Services',description:'Build a clear resume, save it to your account, and get personal resume review and customization.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
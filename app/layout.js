import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dietnam",
  description: "Find walking and running routes in Vietnam",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://wemap-project.github.io/WeMap-Web-SDK-Release/assets/css/wemap.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* <Layout className="layout-bg relative min-h-screen bg-no-repeat">
          <Content className={"p-10"}> */}
        <div className="rounded-md border-2 bg-white p-4 shadow-md">
          {children}
        </div>
        {/* </Content>
        </Layout> */}
      </body>
    </html>
  );
}

import { Routes, Route } from 'react-router-dom'
import useIsMobile from './utils/useIsMobile'
import MainLayout from './layouts/MainLayout'
import NotFound from './pages/NotFound'

import HomeMobile from './mobile/pages/Home'
import SectionMobile from './mobile/pages/Section'
import ArticleMobile from './mobile/pages/Article'

import HomeDesktop from './desktop/pages/Home'
import SectionDesktop from './desktop/pages/Section'
import ArticleDesktop from './desktop/pages/Article'

export default function App() {
  const isMobile = useIsMobile()

  return (
    <Routes>
      <Route path="/" element={<MainLayout>{isMobile ? <HomeMobile /> : <HomeDesktop />}</MainLayout>} />
      <Route path="/seccion/:slug" element={<MainLayout>{isMobile ? <SectionMobile /> : <SectionDesktop />}</MainLayout>} />
      <Route path="/seccion/:slug/:subslug" element={<MainLayout>{isMobile ? <SectionMobile /> : <SectionDesktop />}</MainLayout>} />
      <Route path="/articulo/:slug" element={<MainLayout>{isMobile ? <ArticleMobile /> : <ArticleDesktop />}</MainLayout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
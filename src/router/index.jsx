import { Routes, Route, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
// Store
import { selectIsAdmin, selectIsAuth } from '../store/auth'
// Layouts
import DashboardLayout from '../layouts/DashboardLayout'
import AnimationLayout from '../layouts/AnimationLayout'
import HeaderAuth from '../layouts/HeaderAuth'
import HeaderStand from '../layouts/HeaderStand'
import AdminLayout from '../layouts/AdminLayout'
// Pages
import SynchronousStandsPage from '../pages/SynchronousStandsPage'
import ReservePage from '../pages/ReservePage'
import StandWorkPage from '../pages/StandWorkPage'
import AsynchronousStandsPage from '../pages/AsynchronousStandsPage'
import InstructionPage from '../pages/InstructionPage'
import SupportPage from '../pages/SupportPage'
import MainPage from '../pages/MainPage'
import AdminSyncStandsPage from '../pages/AdminSyncStandsPage'
import InfoPage from '../pages/InfoPage'
import AdminInfoPage from '../pages/AdminInfoPage'
import AdminManualPage from '../pages/AdminManualPage'
import AdminSupportPage from '../pages/AdminSupportPage'
import AdminStaticPage from '../pages/AdminStaticPage'

const Router = () => {
  const isAuth = useSelector(selectIsAuth)
  const isAdmin = useSelector(selectIsAdmin)

  return (
    <Routes>
      {true && (
        <Route
          element={
            <HeaderAuth>
              <Outlet />
            </HeaderAuth>
          }
        >
          <Route path="/" element={<MainPage />} />
        </Route>
      )}

      {true && (
        <Route
          element={
            <DashboardLayout>
              <AnimationLayout>
                <Outlet />
              </AnimationLayout>
            </DashboardLayout>
          }
        >
          <Route path="/synchronousStand" element={<SynchronousStandsPage />} />
          <Route path="/async-stands" element={<AsynchronousStandsPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/instruction" element={<InstructionPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Route>
      )}

      {true && (
        <Route
          element={
            <HeaderStand>
              <Outlet />
            </HeaderStand>
          }
        >
          <Route path="/stand-work/:id" element={<StandWorkPage />} />
        </Route>
      )}

      {true && (
        <Route
          element={
            <AdminLayout>
              <Outlet />
            </AdminLayout>
          }
        >
          <Route path="/admin/sync-stands" element={<AdminSyncStandsPage />} />
          <Route path="/admin/async-stands" element={1} />
          <Route path="/admin/statistics" element={<AdminStaticPage />} />
          <Route path="/admin/info" element={<AdminInfoPage />} />
          <Route path="/admin/instruction" element={<AdminManualPage />} />
          <Route path="/admin/support" element={<AdminSupportPage />} />
        </Route>
      )}
    </Routes>
  )
}

export default Router

import { Footer } from '@/components/footer'
import { Outlet, Link } from 'react-router-dom'

const links = [
  { name: 'Introduction', href: 'introduction' },
  { name: 'button', href: 'button' },
  { name: 'typography', href: 'typography' },

  { name: 'notification', href: 'notification' },

  { name: 'table', href: 'table' },

  { name: 'input', href: 'input' },

  { name: 'select', href: 'select' },

  { name: 'text area', href: 'textarea' },

  { name: 'checkbox', href: 'checkbox' }
]

export function DesignSystemLayout() {
  return (
    <div
      className="max-h-screen flex overflow-y-auto scrollbar--native"
      style={{
        background:
          '0% 0% / auto 25px repeat-y linear-gradient(to top, #ff000000 0% 48%, #ffffff33 48% 52%, #0000ff00 52%), 0% 0% / 25px auto repeat-x linear-gradient(to right, #ff000000 0% 48%, #ffffff33 48% 22%, #0000ff00 52%), radial-gradient(farthest-corner at 100% 100%, #b81432ff 0%, #050f29ff 44%)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div
        id="main-content"
        className="w-full flex flex-col justify-between min-h-screen"
      >
        <main>
          <div className="px-4">
            <div className="w-full">
              <div className="p-4 sm:p-6 xl:p-8">
                <Outlet />
              </div>
            </div>
          </div>

        <div className="bg-slate-950 m-4  rounded-lg">
          <Footer />
        </div>
        </main>
      </div>
      <aside
        id="sidebar"
        className="hidden  z-20 h-screen top-0 right-0 sticky  lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 "
        aria-label="Sidebar"
        style={{
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div className="relative flex-1 flex flex-col min-h-0 borderR pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3  divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      style={{fontFamily:'var(--font-titles)'}}
                      className="text-base capitalize text-gray-200 hover:text-rose-600 transition-colors  font-normal rounded-lg flex items-center p-2 group"
                    >
                      <span className="ml-3">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

import React from 'react';
import Icon from '../common/Icon.jsx';
import { NAV_ITEMS } from '../../data/navigation.js';

export default function Sidebar({ activeNav, setActiveNav, navButtonRefs, handleNavKeyDown }) {
  return (
    <aside
      style={{
        width: '240px',
        background: 'linear-gradient(180deg, #72102a 0%, #5C0C21 100%)',
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        boxShadow: 'rgba(0, 0, 0, 0.15) 4px 0px 20px',
      }}
    >
      {/* Nav Links */}
      <nav
        className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto"
        role="tablist"
        aria-label="Sidebar Navigation"
      >
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => {
                if (navButtonRefs?.current) {
                  navButtonRefs.current[index] = el;
                }
              }}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : 0}
              onClick={() => setActiveNav(item.id)}
              onKeyDown={(e) => handleNavKeyDown && handleNavKeyDown(e, index)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition-all text-left relative outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-1 focus-visible:ring-offset-[#72102a] ${
                isActive
                  ? 'font-bold text-white shadow-sm'
                  : 'font-medium text-white/90 hover:bg-white/10 hover:text-white'
              }`}
              style={
                isActive
                  ? {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                    }
                  : {}
              }
            >
              {/* Active gold vertical bar indicator */}
              {isActive && (
                <span
                  className="absolute left-1 top-2 bottom-2 w-1 rounded-full"
                  style={{ backgroundColor: '#c9a84c' }}
                />
              )}
              <Icon
                name={item.icon}
                className="w-4 h-4 flex-shrink-0 ml-1"
                style={{ color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.85)' }}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Footer */}
      <div className="px-3 py-3 border-t border-white/[0.08] mt-auto">
        <div className="flex items-center justify-between gap-2.5 px-1">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            {/* 32x32 Avatar with white-ish transparency gradient */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 text-white shadow-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(201, 168, 76, 0.45)',
              }}
            >
              LN
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[12px] font-bold leading-tight truncate">
                lam nin
              </div>
              <div className="text-white/60 text-[10px] leading-tight mt-0.5 truncate">
                lamjingbasps@gma...
              </div>
            </div>
          </div>

          {/* Log Out button */}
          <button
            className="px-2.5 py-1.5 rounded-[8px] text-[10px] font-bold text-white transition-all text-center leading-tight hover:bg-white/15 flex-shrink-0"
            style={{
              backgroundColor: 'rgba(92, 12, 33, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            title="Log Out"
          >
            <div>Log</div>
            <div>Out</div>
          </button>
        </div>
      </div>
    </aside>
  );
}

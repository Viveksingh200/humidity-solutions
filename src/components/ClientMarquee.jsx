export default function ClientMarquee() {
  const clients = [
    {
      name: "WAYLINE",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 18L10 6H14L8 18H4ZM12 18L18 6H22L16 18H12Z" />
        </svg>
      ),
    },
    {
      name: "EMBLEM",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4H7V20H4V4ZM10 7H13V20H10V7ZM16 2H19V20H16V2Z" />
        </svg>
      ),
    },
    {
      name: "GRAPHO",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M12 4V20" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "SIGNET",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "PRELUDE",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5V19C12 20.6569 10.6569 22 9 22C7.34315 22 6 20.6569 6 19V5Z" />
          <path d="M14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16V8Z" />
        </svg>
      ),
    },
    {
      name: "NOVAPHARMA",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="10" width="18" height="4" rx="2" />
          <rect x="10" y="3" width="4" height="18" rx="2" />
        </svg>
      ),
    },
    {
      name: "VANGUARD",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 20H8L12 12L16 20H22L12 2Z" />
        </svg>
      ),
    },
    {
      name: "MERIDIAN",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="12" cy="12" rx="4" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] border-y border-white/10 py-7 md:py-9 overflow-hidden select-none">
      <div className="relative w-full overflow-hidden no-scrollbar">
        {/* Continuous Looping Track */}
        <div className="animate-marquee-slow flex items-center whitespace-nowrap">
          {/* First loop */}
          <div className="flex items-center gap-14 md:gap-24 pr-14 md:pr-24">
            {clients.map((client, idx) => (
              <div
                key={`client1-${idx}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <div className="opacity-90">{client.icon}</div>
                <span className="text-[17px] md:text-[19px] font-semibold tracking-[0.08em] uppercase">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second duplicate loop for seamless continuous scrolling */}
          <div className="flex items-center gap-14 md:gap-24 pr-14 md:pr-24" aria-hidden="true">
            {clients.map((client, idx) => (
              <div
                key={`client2-${idx}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <div className="opacity-90">{client.icon}</div>
                <span className="text-[17px] md:text-[19px] font-semibold tracking-[0.08em] uppercase">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

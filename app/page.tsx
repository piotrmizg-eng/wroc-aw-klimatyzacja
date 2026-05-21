export default function Home() {
  return (
    <main className="bg-[#edf3ff] overflow-hidden text-[#071133]">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(4,12,40,0.74), rgba(4,12,40,0.78)), url('/bg-cold-premium.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04102d]/80 via-[#04102d]/30 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-20 pb-24">

          <div className="max-w-[720px]">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-md rounded-full px-5 py-2 text-sm text-cyan-100 mb-8">
              ❄️ Wrocław • Dolny Śląsk
            </div>

            {/* TITLE */}
            <h1 className="text-white font-black leading-[0.92] tracking-[-2px] mb-8">

              <span className="block text-[54px] lg:text-[72px]">
                Montaż
              </span>

              <span className="block text-[54px] lg:text-[72px]">
                klimatyzacji
              </span>

              <span className="block text-[54px] lg:text-[72px] text-[#4ea3ff]">
                do domu i
              </span>

              <span className="block text-[54px] lg:text-[72px] text-[#4ea3ff]">
                firmy
              </span>

            </h1>

            {/* DESC */}
            <p className="text-white/95 text-[22px] leading-[1.4] max-w-[640px] mb-10">
              Profesjonalny montaż klimatyzacji we Wrocławiu i na Dolnym Śląsku.
              Szybkie terminy realizacji oraz darmowa wycena.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">

              {/* PHONE */}
              <a
                href="tel:+48730230919"
                className="bg-[#1f63ff] hover:bg-[#1756eb] transition rounded-full px-8 py-4 flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(0,76,255,0.35)]"
              >

                <span className="text-2xl">
                  📞
                </span>

                <span className="text-white text-[24px] font-black">
                  730 230 919
                </span>

              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/48730230919?text=Dzień dobry,%20interesuje%20mnie%20montaż%20klimatyzacji"
                target="_blank"
                className="bg-[#15b86b] hover:bg-[#10a560] transition rounded-full px-8 py-4 flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(0,180,100,0.28)]"
              >

                <span className="text-2xl">
                  💬
                </span>

                <span className="text-white text-[24px] font-black">
                  WhatsApp
                </span>

              </a>

            </div>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-20 bg-[#edf3ff] rounded-t-[40px] pt-16 pb-20">

        <div className="max-w-[1200px] mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-14">

            <h2 className="text-[42px] lg:text-[58px] font-black mb-3 leading-none">
              Orientacyjny cennik
            </h2>

            <p className="text-[18px] lg:text-[24px] text-[#253b73]">
              Kompleksowy montaż klimatyzacji wraz z materiałami i gwarancją.
            </p>

          </div>

          {/* TOP CARDS */}
          <div className="grid lg:grid-cols-4 gap-6 mb-6">

            {/* CARD */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] text-center">

              <div className="w-20 h-20 rounded-full bg-[#1f63ff] flex items-center justify-center text-white text-4xl mx-auto mb-6">
                ⚡
              </div>

              <h3 className="text-[28px] font-black leading-[1.05] mb-5">
                Szybki montaż
              </h3>

              <p className="text-[18px] text-[#24396b] leading-[1.35]">
                Realizacja nawet w 48 godzin od wyceny.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] text-center">

              <div className="w-20 h-20 rounded-full bg-[#1f63ff] flex items-center justify-center text-white text-4xl mx-auto mb-6">
                ❄️
              </div>

              <h3 className="text-[28px] font-black leading-[1.05] mb-5">
                Darmowa wycena
              </h3>

              <p className="text-[18px] text-[#24396b] leading-[1.35]">
                Dobierzemy najlepsze rozwiązanie do domu lub firmy.
              </p>

            </div>

            {/* 1 KLIMA */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] text-center flex flex-col justify-between">

              <div>

                <div className="w-20 h-20 rounded-full bg-[#1f63ff] text-white flex items-center justify-center text-4xl font-black mx-auto mb-6">
                  1
                </div>

                <h3 className="text-[28px] font-black leading-[1.05] mb-5">
                  1 klimatyzator
                </h3>

                <div className="text-[18px] text-[#2d4786] mb-3">
                  cena od
                </div>

                <div className="text-[52px] font-black text-[#0c2d87] leading-[1.05] mb-8">
                  3499 zł
                </div>

              </div>

              <a
                href="https://wa.me/48730230919"
                target="_blank"
                className="bg-[#17b56a] hover:bg-[#12a15e] transition rounded-full px-6 py-4 flex items-center justify-center gap-3"
              >

                <span className="text-xl">
                  💬
                </span>

                <span className="text-white text-[20px] font-black">
                  WhatsApp
                </span>

              </a>

            </div>

            {/* 2+ */}
            <div className="bg-gradient-to-b from-[#2d7dff] to-[#0037b6] rounded-[28px] p-8 shadow-[0_20px_50px_rgba(0,60,255,0.22)] text-center text-white flex flex-col justify-between">

              <div>

                <div className="w-20 h-20 rounded-full bg-white text-[#0d47c9] flex items-center justify-center text-4xl font-black mx-auto mb-6">
                  2+
                </div>

                <h3 className="text-[28px] font-black leading-[1.05] mb-5">
                  2 lub więcej
                </h3>

                <div className="text-[18px] text-blue-100 mb-3">
                  cena od
                </div>

                <div className="text-[52px] font-black leading-[1.05] mb-8">
                  5299 zł
                </div>

              </div>

              <a
                href="https://wa.me/48730230919"
                target="_blank"
                className="bg-white/15 hover:bg-white/20 transition rounded-full px-6 py-4 flex items-center justify-center gap-3"
              >

                <span className="text-xl">
                  💬
                </span>

                <span className="text-white text-[20px] font-black">
                  WhatsApp
                </span>

              </a>

            </div>

          </div>

          {/* MONTAŻ */}
          <div className="bg-white rounded-[28px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)]">

            <h3 className="text-[42px] font-black mb-8">
              Co zawiera montaż?
            </h3>

            <div className="space-y-5 text-[18px] lg:text-[22px] text-[#1d2f5e] leading-[1.4]">

              <div className="flex gap-4">
                <span className="text-[#1f63ff]">✔</span>
                <p>
                  Profesjonalny montaż jednostki wewnętrznej oraz zewnętrznej na wysokości do 3 m.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-[#1f63ff]">✔</span>
                <p>
                  Wykonanie kompletnego połączenia instalacji chłodniczej oraz elektrycznej.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-[#1f63ff]">✔</span>
                <p>
                  Montaż systemu odprowadzania skroplin w technologii grawitacyjnej.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-[#1f63ff]">✔</span>
                <p>
                  Wykonanie jednego estetycznego przewiertu przez ścianę Ø 40–65 mm.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-[#1f63ff]">✔</span>
                <p>
                  Podłączenie urządzenia do istniejącej instalacji elektrycznej.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-[#1f63ff]">✔</span>
                <p>
                  W cenie wszystkie niezbędne materiały montażowe.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-[#1f63ff]">✔</span>
                <p>
                  Test szczelności instalacji, wykonanie próżni technicznej i uruchomienie klimatyzacji.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-[#1f63ff]">✔</span>
                <p>
                  Instruktaż obsługi urządzenia i praktyczne wskazówki użytkowania.
                </p>
              </div>

            </div>

          </div>

          {/* KONTAKT */}
          <div className="mt-14 bg-gradient-to-b from-[#0036b3] to-[#001f66] rounded-[34px] py-14 px-8 text-center text-white">

            <h2 className="text-[42px] lg:text-[58px] font-black mb-4">
              Szybki kontakt
            </h2>

            <p className="text-[20px] lg:text-[26px] text-blue-100 mb-8">
              Zadzwoń lub napisz na WhatsApp — odpowiemy jak najszybciej.
            </p>

            <div className="flex flex-col lg:flex-row justify-center gap-6">

              {/* TEL */}
              <a
                href="tel:+48730230919"
                className="bg-[#0a2f9e] hover:bg-[#082680] transition rounded-full px-8 py-5 flex items-center justify-center gap-3"
              >

                <span className="text-2xl">
                  📞
                </span>

                <span className="text-[24px] lg:text-[30px] font-black">
                  730 230 919
                </span>

              </a>

              {/* WA */}
              <a
                href="https://wa.me/48730230919"
                target="_blank"
                className="bg-[#17b56a] hover:bg-[#12a15e] transition rounded-full px-8 py-5 flex items-center justify-center gap-3"
              >

                <span className="text-2xl">
                  💬
                </span>

                <span className="text-[24px] lg:text-[30px] font-black">
                  WhatsApp
                </span>

              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
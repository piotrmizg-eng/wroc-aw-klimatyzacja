export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b18] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(3,8,24,0.94) 0%, rgba(3,8,24,0.78) 42%, rgba(3,8,24,0.25) 100%), url('/bg-cold-premium.png')",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.22),transparent_35%)]" />

        <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-300/30 flex items-center justify-center font-black text-cyan-300">
              GP
            </div>

            <div>
              <div className="font-black tracking-wide">
                Gebrüder Peters
              </div>
              <div className="text-xs text-cyan-200/80">
                Polska sp. z o.o.
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
  <a href="#uslugi" className="hover:text-cyan-300 transition">
    Usługi
  </a>

  <a href="#realizacje" className="hover:text-cyan-300 transition">
    Realizacje
  </a>

  <a href="#proces" className="hover:text-cyan-300 transition">
    Proces
  </a>

  <a
    href="https://wroclaw-pv.pl"
    target="_blank"
    className="hover:text-cyan-300 transition"
  >
    Fotowoltaika
  </a>

  <a
    href="https://wroclaw-pompyciepla.pl"
    target="_blank"
    className="hover:text-cyan-300 transition"
  >
    Pompy ciepła
  </a>

  <a href="#kontakt" className="hover:text-cyan-300 transition">
    Kontakt
  </a>
</nav>

          <a
            href="tel:+48730230919"
            className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-[#04101f] px-5 py-3 rounded-full font-black transition"
          >
            730 230 919
          </a>

        </header>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-28">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 border border-cyan-300/20 bg-white/10 backdrop-blur-xl rounded-full px-5 py-2 text-sm text-cyan-100 mb-8">
              ❄️ Premium klimatyzacja • Wrocław i okolice
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-[-3px] mb-8">
              Nowoczesna klimatyzacja
              <span className="block text-cyan-300">
                do domu i firmy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-2xl mb-10">
              Projektujemy i wykonujemy estetyczne, energooszczędne instalacje klimatyzacji
              na terenie Wrocławia i okolic.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">

              <a
                href="https://wa.me/48730230919?text=Dzień dobry,%20interesuje%20mnie%20bezpłatna%20wycena%20klimatyzacji"
                target="_blank"
                className="bg-cyan-400 hover:bg-cyan-300 text-[#03101f] px-8 py-5 rounded-full font-black text-lg shadow-[0_20px_60px_rgba(34,211,238,0.35)] transition text-center"
              >
                Umów bezpłatną wycenę
              </a>

              <a
                href="tel:+48730230919"
                className="border border-white/20 bg-white/10 hover:bg-white/15 backdrop-blur-xl px-8 py-5 rounded-full font-black text-lg transition text-center"
              >
                Zadzwoń teraz
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="relative py-28 bg-[#071225]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-16">
            <p className="text-cyan-300 font-bold mb-4">
              Nasze usługi
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Klimatyzacja zaprojektowana pod komfort
            </h2>

            <p className="text-blue-100/70 text-xl leading-relaxed">
              Łączymy techniczne doświadczenie z estetyką montażu i nowoczesnym podejściem do komfortu wnętrz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              {
                icon: "❄️",
                title: "Komfort dla domu",
                text: "Nowoczesne systemy klimatyzacji do mieszkań, apartamentów i domów jednorodzinnych. Ciche, energooszczędne i estetyczne rozwiązania dopasowane do wnętrza.",
              },
              {
                icon: "🏢",
                title: "Klimatyzacja dla biznesu",
                text: "Profesjonalne systemy chłodzenia dla biur, lokali usługowych i przestrzeni komercyjnych. Komfort pracy, wydajność i niezawodność przez cały rok.",
              },
              {
                icon: "🛠️",
                title: "Serwis i opieka techniczna",
                text: "Przeglądy, konserwacja i czyszczenie klimatyzacji. Dbamy o wydajność urządzeń, jakość powietrza oraz bezawaryjną pracę systemu.",
              },
              {
                icon: "📐",
                title: "Indywidualny dobór urządzeń",
                text: "Pomagamy dobrać odpowiedni system klimatyzacji do powierzchni, układu pomieszczeń oraz oczekiwanego komfortu użytkowania.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 hover:bg-white/[0.09] hover:border-cyan-300/30 transition shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/15 border border-cyan-300/20 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-5">
                  {item.title}
                </h3>

                <p className="text-blue-100/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY */}
      <section className="py-28 bg-[#eef6ff] text-[#061225]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-16">

            <p className="text-blue-600 font-bold mb-4">
              Dlaczego my?
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Komfort, estetyka i nowoczesne rozwiązania
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              ["Komfort i estetyka", "Dbamy nie tylko o wydajność urządzeń, ale również o estetykę montażu i dopasowanie do wnętrza."],
              ["Nowoczesne rozwiązania", "Stawiamy na energooszczędne i ciche systemy klimatyzacji nowej generacji."],
              ["Sprawna realizacja", "Szybkie terminy montażu, sprawna organizacja i pełne wsparcie na każdym etapie realizacji."],
              ["Profesjonalna opieka", "Doradzamy, projektujemy i serwisujemy systemy klimatyzacji dla klientów indywidualnych i biznesowych."],
            ].map(([title, text], i) => (
              <div
                key={title}
                className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-blue-100"
              >
                <div className="text-blue-600 text-5xl font-black mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-2xl font-black mb-5">
                  {title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* REALIZACJE */}
      <section id="realizacje" className="py-28 bg-[#071225]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 items-center mb-14">

            <div>
              <p className="text-cyan-300 font-bold mb-4">
                Realizacje
              </p>

              <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
                Estetyka montażu ma znaczenie
              </h2>

              <p className="text-blue-100/70 text-xl leading-relaxed">
                Tworzymy nowoczesne instalacje klimatyzacji, które zapewniają komfort użytkowania
                i harmonijnie wpisują się w przestrzeń wnętrza.
              </p>
            </div>

            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <img
                src="/realizacja-1.jpg"
                alt="Realizacja klimatyzacji"
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-[36px] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <img
                src="/realizacja-2.jpg"
                alt="Realizacja klimatyzacji we wnętrzu"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="rounded-[36px] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <img
                src="/realizacja-3.jpg"
                alt="Montaż klimatyzacji"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section id="proces" className="py-28 bg-[#eef6ff] text-[#061225]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-16">

            <p className="text-blue-600 font-bold mb-4">
              Proces
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Prosty i przejrzysty proces realizacji
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              ["Kontakt i wycena", "Rozmawiamy o potrzebach, dobieramy rozwiązanie i przygotowujemy wycenę."],
              ["Dobór urządzenia", "Pomagamy wybrać system dopasowany do wnętrza, powierzchni i oczekiwanego komfortu."],
              ["Profesjonalny montaż", "Wykonujemy estetyczny montaż z dbałością o detale i porządek w miejscu pracy."],
              ["Serwis i wsparcie", "Pozostajemy do dyspozycji również po zakończeniu realizacji."],
            ].map(([title, text], i) => (
              <div
                key={title}
                className="relative bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-blue-100"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-8">
                  {i + 1}
                </div>

                <h3 className="text-2xl font-black mb-5">
                  {title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* OPINIE */}
      <section className="py-28 bg-[#071225]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-16">
            <p className="text-cyan-300 font-bold mb-4">
              Opinie klientów
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Zaufanie budowane jakością realizacji
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Montaż wykonany bardzo estetycznie, całość przebiegła sprawnie i terminowo. Klimatyzacja świetnie wpisuje się we wnętrze.",
              "Profesjonalne doradztwo, czysty montaż i bardzo dobry kontakt na każdym etapie realizacji.",
              "Szybka wycena, sprawna realizacja i duża dbałość o szczegóły. Bardzo dobry efekt końcowy.",
            ].map((text) => (
              <div
                key={text}
                className="rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
              >
                <div className="text-cyan-300 text-xl mb-6">
                  ★★★★★
                </div>

                <p className="text-blue-100/80 leading-relaxed mb-8">
                  „{text}”
                </p>

                <div className="text-white font-bold">
                  Klient z Wrocławia
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-[#eef6ff] text-[#061225]">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold mb-4">
              FAQ
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px]">
              Najczęstsze pytania
            </h2>
          </div>

          <div className="space-y-5">

            {[
              ["Ile kosztuje montaż klimatyzacji?", "Orientacyjny koszt montażu jednego klimatyzatora zaczyna się od 3499 zł. Finalna cena zależy od urządzenia, długości instalacji i warunków montażowych."],
              ["Jak długo trwa montaż?", "Standardowy montaż klimatyzacji najczęściej trwa jeden dzień roboczy."],
              ["Czy wykonujecie darmową wycenę?", "Tak. Przygotowujemy indywidualną wycenę po krótkiej rozmowie i analizie potrzeb klienta."],
              ["Czy klimatyzacja może ogrzewać?", "Tak. Nowoczesne klimatyzatory mogą również efektywnie dogrzewać pomieszczenia w okresach przejściowych."],
            ].map(([q, a]) => (
              <div
                key={q}
                className="bg-white rounded-[28px] p-7 shadow-[0_15px_40px_rgba(15,23,42,0.06)] border border-blue-100"
              >
                <h3 className="text-2xl font-black mb-3">
                  {q}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {a}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="relative py-28 bg-[#050b18]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.20),transparent_35%)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
            Komfort zaczyna się od dobrze zaprojektowanej klimatyzacji
          </h2>

          <p className="text-blue-100/70 text-xl mb-10">
            Skontaktuj się z nami i umów bezpłatną wycenę montażu klimatyzacji.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="tel:+48730230919"
              className="bg-cyan-400 hover:bg-cyan-300 text-[#03101f] px-8 py-5 rounded-full font-black text-lg transition"
            >
              📞 730 230 919
            </a>

            <a
              href="https://wa.me/48730230919?text=Dzień dobry,%20interesuje%20mnie%20montaż%20klimatyzacji"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-5 rounded-full font-black text-lg transition"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020817] border-t border-white/10 py-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-blue-100/60">

          <div>
            <div className="text-white font-black text-2xl mb-2">
              Gebrüder Peters Polska Sp. z o.o.
            </div>
            <p>
              Klimatyzacja Wrocław i okolice
            </p>
          </div>

          <div>
            <p>Telefon: 730 230 919</p>
            <p>Wrocław • Dolny Śląsk</p>
          </div>

        </div>

      </footer>

      {/* STICKY */}
      <a
        href="tel:+48730230919"
        className="fixed bottom-6 right-6 z-50 bg-cyan-400 hover:bg-cyan-300 text-[#03101f] px-6 py-4 rounded-full font-black shadow-[0_20px_60px_rgba(34,211,238,0.35)] transition"
      >
        📞 Zadzwoń
      </a>

    </main>
  );
}